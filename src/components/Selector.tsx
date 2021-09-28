import React from 'react';
import './Selector.css';
import characters, { Character, CharType } from '../static/characters';
import { setEquals } from '../static/utils';

export interface SelectorProps {
  selection: Character[];
  onSelectionChange: (e: Character[]) => void
}

// Define rows for the table based on character type
const selectorRows = [
  [CharType.Punctuation],
  [CharType.Uppercase],
  [CharType.Uppercase, CharType.WithDiacritical],
  [CharType.Lowercase, CharType.WithDiacritical],
  [CharType.Lowercase, CharType.XHeight],
  [CharType.Lowercase, CharType.Descender],
  [CharType.Lowercase, CharType.Ascender],
  [CharType.Symbol],
  [CharType.NumberUppercase],
  [CharType.NumberTraditional, CharType.XHeight],
  [CharType.NumberTraditional, CharType.Descender],
  [CharType.NumberTraditional, CharType.Ascender]
];

const Selector = (props: SelectorProps) => {
  // Infer the column count from the rightmost column defined in the character list
  const columnCount = characters
    .map(char => char.column)
    .reduce((acc, column) => column > acc ? column : acc, 0);

  const toggleSelected = (char: Character) => {
    const wasSelected = props.selection.some(sel => sel.char === char.char);
    const newSelection = wasSelected ?
      props.selection.filter(sel => sel.char !== char.char) :
      props.selection.concat(char);

    props.onSelectionChange(newSelection);
  };

  const renderCellContent = (cellCharacters: Character[]) => {
    const charElements: JSX.Element[] = [];

    cellCharacters.forEach((char, i) => {
      const selected = props.selection.some(sel => sel.char === char.char);
      const displayChar = char.char.split('_')[0];
      const modifier = char.char.split('_')[1];

      let className = 'character';
      if (modifier === 'low') className += ' number_oldstyle';
      if (modifier === 'alt') className += ' style_alternate';
      if (selected) className += ' selected';

      charElements.push(
        <span key={i} className={className} onClick={() => toggleSelected(char)}>
          {displayChar}
        </span>
      );
    });

    return charElements;
  };

  const renderRow = (rowTypes: CharType[], index: number) => {
    const rowCharacters = characters
      .filter(char => setEquals(char.types, rowTypes));

    const cells: JSX.Element[] = [];
    for (let i = 0; i < columnCount; i++) {
      const cellCharacters = rowCharacters
        .filter(char => char.column === i + 1);

      cells.push(
        <td key={i}>
          <div className="selector-cell-content">
            {renderCellContent(cellCharacters)}
          </div>
        </td>
      );
    }

    return (
      <tr key={index}>
        {cells}
      </tr>
    );
  };

  const columns: JSX.Element[] = [];
  for (let i = 0; i < columnCount; i++)
    columns.push(<col key={i}></col>);

  return (
    <table className="selector-table">
      <colgroup span={columnCount}>
        {columns}
      </colgroup>
      <tbody>
        {selectorRows.map((row, i) => renderRow(row, i))}
      </tbody>
    </table>
  );
};

export default Selector;