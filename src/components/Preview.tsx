import React from 'react';
import './Preview.css';
import { Character } from '../static/characters';
import rules, { evalRule } from '../static/rules';

export interface PreviewProps {
  selection: Character[];
}

const Preview = (props: PreviewProps) => {
  const renderCharacter = (char: Character, i: number) => {
    const displayChar = char.char.split('_')[0];
    const modifier = char.char.split('_')[1];

    let className = 'character';
    if (modifier === 'low') className += ' number_oldstyle';
    if (modifier === 'alt') className += ' style_alternate';

    return (
      <span key={i} className={className}>
        {displayChar}
      </span>
    );
  };

  const allPassed = rules.every(ruleOrGroup => evalRule(ruleOrGroup, props.selection));

  return (
    <div className="preview">
      <div>Signos seleccionados</div>
      <span className="characters">
        &nbsp;{props.selection.map((char, i) => renderCharacter(char, i))}&nbsp;
      </span>
      {allPassed && (
        <span className="all-passed">&#128076;</span>
      )}
    </div>
  );
};

export default Preview;