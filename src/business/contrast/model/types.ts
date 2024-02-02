import Color from 'color';

type Vision = {
  name: string;
  type: string;
  description: string;
  percent: number;
  colorModifier?: (color: Color) => Color;
  contrastModifier?: number;
};

type ScoredVision = Vision & {
  contrastScore: number;
  largeFontWcagLevel: WcagLevel;
  regularFontWcagLevel: WcagLevel;
};

type WcagLevel = 'AAA' | 'AA' | 'FAIL';

export type { ScoredVision, Vision, WcagLevel };
