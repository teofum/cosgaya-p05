export enum CharType {
  Punctuation,
  Uppercase,
  Lowercase,
  NumberTraditional,
  NumberUppercase,
  Symbol,
  XHeight,
  Descender,
  Ascender,
  WithDiacritical
}

const charTypeNameMap = [
  { charType: CharType.Punctuation, name: 'Puntuación' },
  { charType: CharType.Uppercase, name: 'Mayúsculas' },
  { charType: CharType.Lowercase, name: 'Minúsculas' },
  { charType: CharType.NumberTraditional, name: 'Números antiguos' },
  { charType: CharType.NumberUppercase, name: 'Números mayúsculos' },
  { charType: CharType.Symbol, name: 'Signos' },
  { charType: CharType.XHeight, name: 'de altura de x' },
  { charType: CharType.Descender, name: 'con descendente' },
  { charType: CharType.Ascender, name: 'con ascendente' },
  { charType: CharType.WithDiacritical, name: 'con diacrítico' }
];

export const getCharTypeName = (type: CharType): string => {
  return charTypeNameMap.find(it => it.charType === type)?.name || '';
};

export interface Character {
  column: number;
  types: CharType[];
  char: string;
}

const characters: Character[] = [
  {
    column: 1,
    types: [CharType.Punctuation],
    char: ':'
  },
  {
    column: 1,
    types: [CharType.Punctuation],
    char: ';'
  },
  {
    column: 1,
    types: [CharType.Punctuation],
    char: '«»'
  },
  {
    column: 1,
    types: [CharType.Punctuation],
    char: '…'
  },
  {
    column: 2,
    types: [CharType.Uppercase],
    char: 'S'
  },
  {
    column: 4,
    types: [CharType.Uppercase],
    char: 'C'
  },
  {
    column: 4,
    types: [CharType.Uppercase],
    char: 'D'
  },
  {
    column: 4,
    types: [CharType.Uppercase],
    char: 'G'
  },
  {
    column: 4,
    types: [CharType.Uppercase],
    char: 'O'
  },
  {
    column: 4,
    types: [CharType.Uppercase],
    char: 'Q'
  },
  {
    column: 5,
    types: [CharType.Uppercase],
    char: 'U'
  },
  {
    column: 6,
    types: [CharType.Uppercase],
    char: 'J'
  },
  {
    column: 7,
    types: [CharType.Uppercase],
    char: 'A'
  },
  {
    column: 7,
    types: [CharType.Uppercase],
    char: 'V'
  },
  {
    column: 8,
    types: [CharType.Uppercase],
    char: 'M'
  },
  {
    column: 8,
    types: [CharType.Uppercase],
    char: 'W'
  },
  {
    column: 9,
    types: [CharType.Uppercase],
    char: 'K'
  },
  {
    column: 9,
    types: [CharType.Uppercase],
    char: 'X'
  },
  {
    column: 9,
    types: [CharType.Uppercase],
    char: 'Y'
  },
  {
    column: 9,
    types: [CharType.Uppercase],
    char: 'N'
  },
  {
    column: 9,
    types: [CharType.Uppercase],
    char: 'Z'
  },
  {
    column: 10,
    types: [CharType.Uppercase],
    char: 'B'
  },
  {
    column: 10,
    types: [CharType.Uppercase],
    char: 'P'
  },
  {
    column: 10,
    types: [CharType.Uppercase],
    char: 'R'
  },
  {
    column: 11,
    types: [CharType.Uppercase],
    char: 'E'
  },
  {
    column: 11,
    types: [CharType.Uppercase],
    char: 'F'
  },
  {
    column: 11,
    types: [CharType.Uppercase],
    char: 'H'
  },
  {
    column: 11,
    types: [CharType.Uppercase],
    char: 'T'
  },
  {
    column: 9,
    types: [CharType.Uppercase, CharType.WithDiacritical],
    char: 'Ñ'
  },
  {
    column: 2,
    types: [CharType.Lowercase, CharType.WithDiacritical],
    char: 'á'
  },
  {
    column: 2,
    types: [CharType.Lowercase, CharType.WithDiacritical],
    char: 'é'
  },
  {
    column: 3,
    types: [CharType.Lowercase, CharType.WithDiacritical],
    char: 'á_alt'
  },
  {
    column: 4,
    types: [CharType.Lowercase, CharType.WithDiacritical],
    char: 'ó'
  },
  {
    column: 5,
    types: [CharType.Lowercase, CharType.WithDiacritical],
    char: 'ñ'
  },
  {
    column: 5,
    types: [CharType.Lowercase, CharType.WithDiacritical],
    char: 'ú'
  },
  {
    column: 5,
    types: [CharType.Lowercase, CharType.WithDiacritical],
    char: 'ü'
  },
  {
    column: 2,
    types: [CharType.Lowercase, CharType.XHeight],
    char: 'a'
  },
  {
    column: 2,
    types: [CharType.Lowercase, CharType.XHeight],
    char: 'e'
  },
  {
    column: 2,
    types: [CharType.Lowercase, CharType.XHeight],
    char: 's'
  },
  {
    column: 3,
    types: [CharType.Lowercase, CharType.XHeight],
    char: 'a_alt'
  },
  {
    column: 4,
    types: [CharType.Lowercase, CharType.XHeight],
    char: 'c'
  },
  {
    column: 4,
    types: [CharType.Lowercase, CharType.XHeight],
    char: '¢'
  },
  {
    column: 4,
    types: [CharType.Lowercase, CharType.XHeight],
    char: 'o'
  },
  {
    column: 5,
    types: [CharType.Lowercase, CharType.XHeight],
    char: 'm'
  },
  {
    column: 5,
    types: [CharType.Lowercase, CharType.XHeight],
    char: 'n'
  },
  {
    column: 5,
    types: [CharType.Lowercase, CharType.XHeight],
    char: 'u'
  },
  {
    column: 6,
    types: [CharType.Lowercase, CharType.XHeight],
    char: 'r'
  },
  {
    column: 6,
    types: [CharType.Lowercase, CharType.XHeight],
    char: 't'
  },
  {
    column: 7,
    types: [CharType.Lowercase, CharType.XHeight],
    char: 'v'
  },
  {
    column: 8,
    types: [CharType.Lowercase, CharType.XHeight],
    char: 'w'
  },
  {
    column: 9,
    types: [CharType.Lowercase, CharType.XHeight],
    char: 'x'
  },
  {
    column: 9,
    types: [CharType.Lowercase, CharType.XHeight],
    char: 'z'
  },
  {
    column: 2,
    types: [CharType.Lowercase, CharType.Descender],
    char: 'g'
  },
  {
    column: 3,
    types: [CharType.Lowercase, CharType.Descender],
    char: 'p'
  },
  {
    column: 3,
    types: [CharType.Lowercase, CharType.Descender],
    char: 'q'
  },
  {
    column: 3,
    types: [CharType.Lowercase, CharType.Descender],
    char: 'g_alt'
  },
  {
    column: 6,
    types: [CharType.Lowercase, CharType.Descender],
    char: 'j'
  },
  {
    column: 9,
    types: [CharType.Lowercase, CharType.Descender],
    char: 'y'
  },
  {
    column: 3,
    types: [CharType.Lowercase, CharType.Ascender],
    char: 'b'
  },
  {
    column: 3,
    types: [CharType.Lowercase, CharType.Ascender],
    char: 'd'
  },
  {
    column: 5,
    types: [CharType.Lowercase, CharType.Ascender],
    char: 'h'
  },
  {
    column: 6,
    types: [CharType.Lowercase, CharType.Ascender],
    char: 'f'
  },
  {
    column: 9,
    types: [CharType.Lowercase, CharType.Ascender],
    char: 'k'
  },
  {
    column: 3,
    types: [CharType.Symbol],
    char: '@'
  },
  {
    column: 4,
    types: [CharType.Symbol],
    char: '€'
  },
  {
    column: 10,
    types: [CharType.Symbol],
    char: '&'
  },
  {
    column: 12,
    types: [CharType.Symbol],
    char: '{}'
  },
  {
    column: 12,
    types: [CharType.Symbol],
    char: '()'
  },
  {
    column: 12,
    types: [CharType.Symbol],
    char: '%'
  },
  {
    column: 12,
    types: [CharType.Symbol],
    char: '#'
  },
  {
    column: 13,
    types: [CharType.Symbol],
    char: '¿?'
  },
  {
    column: 13,
    types: [CharType.Symbol],
    char: '£'
  },
  {
    column: 3,
    types: [CharType.NumberUppercase],
    char: '6'
  },
  {
    column: 3,
    types: [CharType.NumberUppercase],
    char: '9'
  },
  {
    column: 4,
    types: [CharType.NumberUppercase],
    char: '0'
  },
  {
    column: 6,
    types: [CharType.NumberUppercase],
    char: '1'
  },
  {
    column: 10,
    types: [CharType.NumberUppercase],
    char: '3'
  },
  {
    column: 10,
    types: [CharType.NumberUppercase],
    char: '5'
  },
  {
    column: 10,
    types: [CharType.NumberUppercase],
    char: '8'
  },
  {
    column: 11,
    types: [CharType.NumberUppercase],
    char: '4'
  },
  {
    column: 11,
    types: [CharType.NumberUppercase],
    char: '7'
  },
  {
    column: 13,
    types: [CharType.NumberUppercase],
    char: '2'
  },
  {
    column: 4,
    types: [CharType.NumberTraditional, CharType.XHeight],
    char: '0_low'
  },
  {
    column: 6,
    types: [CharType.NumberTraditional, CharType.XHeight],
    char: '1_low'
  },
  {
    column: 13,
    types: [CharType.NumberTraditional, CharType.XHeight],
    char: '2_low'
  },
  {
    column: 3,
    types: [CharType.NumberTraditional, CharType.Descender],
    char: '9_low'
  },
  {
    column: 10,
    types: [CharType.NumberTraditional, CharType.Descender],
    char: '3_low'
  },
  {
    column: 10,
    types: [CharType.NumberTraditional, CharType.Descender],
    char: '5_low'
  },
  {
    column: 11,
    types: [CharType.NumberTraditional, CharType.Descender],
    char: '4_low'
  },
  {
    column: 11,
    types: [CharType.NumberTraditional, CharType.Descender],
    char: '7_low'
  },
  {
    column: 3,
    types: [CharType.NumberTraditional, CharType.Ascender],
    char: '6_low'
  },
  {
    column: 10,
    types: [CharType.NumberTraditional, CharType.Ascender],
    char: '8_low'
  }
];

export default characters;