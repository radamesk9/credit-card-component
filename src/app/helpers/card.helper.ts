import { CardBrandEnum } from "./models";

const digitalMask = (numDigits: number) => Array(numDigits).fill(/\d/);


export const getValidationConfigFromCardNo = (
  rawValue: string
) => cards.find(card => {
  const patterns = card.patterns.map(
    pattern => new RegExp(`^${pattern}`, 'g')
  );
  const matchResult = patterns
    .map(pattern => rawValue.match(pattern))
    .filter(result => result);

  return !!matchResult.length;
});

/*

cards.find(card => {
  const patterns = card.patterns.map(
    pattern => new RegExp(`^${pattern}`, 'g')
  );
  const matchResult = patterns
    .map(pattern => rawValue.match(pattern))
    .filter(result => result);

  return !!matchResult.length;
});
*/

const defaultFormat = /(\d{1,4})/g;

export interface CardValidation {
  type: CardBrandEnum;
  patterns: number[];
  mask: any;
  format: RegExp;
  length: number[];
  cvvLength: number[];
  luhn: boolean;
}

const defaultMask19 = [
  ...digitalMask(4),
  ' ',
  ...digitalMask(4),
  ' ',
  ...digitalMask(4),
  ' ',
  ...digitalMask(4),
  ' ',
  ...digitalMask(3)
];

const defaultMask16 = [
  ...digitalMask(4),
  ' ',
  ...digitalMask(4),
  ' ',
  ...digitalMask(4),
  ' ',
  ...digitalMask(4)
];

const dinersClubMask = [
  ...digitalMask(4),
  ' ',
  ...digitalMask(6),
  ' ',
  ...digitalMask(4),
];

const amexMask = [
  ...digitalMask(4),
  ' ',
  ...digitalMask(6),
  ' ',
  ...digitalMask(5)
];

const defaultLength = [16, 19];
const defaultCvvLength = [3];

export const cards = Object.freeze([
  {
    type: CardBrandEnum.VISA,
    patterns: [4],
    mask: defaultMask19,
    format: defaultFormat,
    length: defaultLength,
    cvvLength: defaultCvvLength,
    luhn: true
  },
  {
    type: CardBrandEnum.MAESTRO,
    patterns: [5018, 502, 503, 506, 56, 58, 639, 6220, 67],
    mask: defaultMask19,
    format: defaultFormat,
    length: [12, 13, 14, 15, 16, 17, 18, 19],
    cvvLength: defaultCvvLength,
    luhn: true
  },
  {
    type: CardBrandEnum.MASTERCARD,
    patterns: [51, 52, 53, 54, 55],
    mask: defaultMask16,
    format: defaultFormat,
    length: defaultLength,
    cvvLength: defaultCvvLength,
    luhn: true
  },
  {
    type: CardBrandEnum.AMERICANEXPRESS,
    patterns: [34, 37],
    mask: amexMask,
    format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
    length: [15],
    cvvLength: [4],
    luhn: true
  },
  {
    type: CardBrandEnum.DISCOVER,
    patterns: [6011],
    mask: defaultMask16,
    format: defaultFormat,
    length: defaultLength,
    cvvLength: defaultCvvLength,
    luhn: true
  },
  {
    type: CardBrandEnum.DINERSCLUB,
    patterns: [300, 301, 302, 303, 304, 305, 36, 38, 39],
    mask: dinersClubMask,
    format: defaultFormat,
    length: defaultLength,
    cvvLength: defaultCvvLength,
    luhn: true
  },
  {
    type: CardBrandEnum.JCB,
    patterns: [35],
    mask: defaultMask16,
    format: defaultFormat,
    length: defaultLength,
    cvvLength: defaultCvvLength,
    luhn: true
  },
  {
    type: CardBrandEnum.UNIONPAY,
    patterns: [62],
    mask: defaultMask16,
    format: defaultFormat,
    length: defaultLength,
    cvvLength: defaultCvvLength,
    luhn: true
  },
  {
    type: CardBrandEnum.DANKORT,
    patterns: [5019],
    mask: defaultMask16,
    format: defaultFormat,
    length: defaultLength,
    cvvLength: defaultCvvLength,
    luhn: true
  },
  {
    type: CardBrandEnum.FORBRUGSFORENINGEN,
    patterns: [600],
    mask: defaultMask16,
    format: defaultFormat,
    length: defaultLength,
    cvvLength: defaultCvvLength,
    luhn: true
  },
  {
    type: CardBrandEnum.DANKORT,
    patterns: [5019],
    mask: defaultMask16,
    format: defaultFormat,
    length: defaultLength,
    cvvLength: defaultCvvLength,
  }
]);