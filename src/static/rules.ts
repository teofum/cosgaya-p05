import { Character, CharType } from './characters';
import { setContains } from './utils';

// Rule types
export type RulePredicate = (selection: Character[]) => boolean;

export interface Rule {
  name: string;
  predicate: RulePredicate;
}

export interface RuleGroup {
  name: string;
  logic: 'or' | 'xor' | 'and';
  rules: (Rule | RuleGroup)[];
}

// Utilities
export const isRuleGroup = (ruleOrGroup: Rule | RuleGroup): ruleOrGroup is RuleGroup => {
  return (ruleOrGroup as RuleGroup).logic !== undefined;
};

export const evalRule = (ruleOrGroup: Rule | RuleGroup, selection: Character[]): boolean => {
  if (isRuleGroup(ruleOrGroup)) {
    const passed = ruleOrGroup.rules.filter(rule => evalRule(rule, selection));
    switch (ruleOrGroup.logic) {
      case 'or':
        return passed.length >= 1;
      case 'xor':
        return passed.length === 1;
      case 'and':
        return passed.length === ruleOrGroup.rules.length;
    }
  } else return ruleOrGroup.predicate(selection);
};

// Rule predicates and predicate-factories
const requireCount = (requiredCount: number) =>
  (selection: Character[]) => selection.length === requiredCount;

const oneCharPerColumn = (selection: Character[]) => {
  const columns = selection.map(char => char.column);
  const unique = [...new Set(columns)];

  return columns.length === unique.length;
};

const requireColumns = (requiredColumns: number[]) =>
  (selection: Character[]) =>
    requiredColumns.every(required => selection.some(char => char.column === required));

const requireCountOfType = (requiredCount: number, types: CharType[], acceptHigher: boolean) =>
  (selection: Character[]) => {
    const countOfType = selection.filter(char => setContains(char.types, types)).length;
    return acceptHigher ? countOfType >= requiredCount : countOfType === requiredCount;
  };

// Da Rulez
export const requiredColumns = [1, 2];

const rules: (Rule | RuleGroup)[] = [
  {
    name: 'Debe quedar un grupo de 12 signos en total',
    predicate: requireCount(12)
  },
  {
    name: 'Sólo puede elegirse un carácter por columna',
    predicate: oneCharPerColumn
  },
  {
    name: 'Tiene que haber un carácter de cada columna con fondo celeste',
    predicate: requireColumns(requiredColumns)
  },
  {
    name: 'Tiene que haber un signo de puntuación',
    predicate: requireCountOfType(1, [CharType.Punctuation], false)
  },
  {
    name: 'Tiene que haber 3 letras mayúsculas',
    predicate: requireCountOfType(3, [CharType.Uppercase], false)
  },
  {
    name: 'Letras minúsculas:',
    logic: 'and',
    rules: [
      {
        name: 'Tiene que haber 4 letras minúsculas',
        predicate: requireCountOfType(4, [CharType.Lowercase], false)
      },
      {
        name: 'Tiene que haber por lo menos una letra de altura de x',
        predicate: requireCountOfType(1, [CharType.Lowercase, CharType.XHeight], true)
      },
      {
        name: 'Tiene que haber por lo menos una letra con descendente',
        predicate: requireCountOfType(1, [CharType.Lowercase, CharType.Descender], true)
      },
      {
        name: 'Tiene que haber por lo menos una letra con ascendente',
        predicate: requireCountOfType(1, [CharType.Lowercase, CharType.Ascender], true)
      }
    ]
  },
  {
    name: 'Tiene que haber una letra con diacrítico',
    predicate: requireCountOfType(1, [CharType.WithDiacritical], false)
  },
  {
    name: 'Tiene que haber un signo no alfanumérico',
    predicate: requireCountOfType(1, [CharType.Symbol], false)
  },
  {
    name: 'Tiene que haber una de las siguientes:',
    logic: 'xor',
    rules: [
      {
        name: '3 números mayúsculos',
        predicate: requireCountOfType(3, [CharType.NumberUppercase], false)
      },
      {
        name: '3 números antiguos, de los cuales:',
        logic: 'and',
        rules: [
          {
            name: 'Uno de altura de x',
            predicate: requireCountOfType(1, [CharType.NumberTraditional, CharType.XHeight], false)
          },
          {
            name: 'Uno con descendente',
            predicate: requireCountOfType(1, [CharType.NumberTraditional, CharType.Descender], false)
          },
          {
            name: 'Uno con ascendente',
            predicate: requireCountOfType(1, [CharType.NumberTraditional, CharType.Ascender], false)
          }
        ]
      }
    ]
  }
];

export default rules;