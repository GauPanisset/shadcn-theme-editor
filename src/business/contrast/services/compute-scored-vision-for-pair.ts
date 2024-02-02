import Color from 'color';

import { ScoredVision } from '../model/types';
import { visions } from '../visions-data';
import { computeWcagLevel } from './compute-wcag-level';

const identity = (color: Color) => color;

const computeScoredVisionForPair = (
  backgroundColor: Color,
  foregroundColor: Color
): ScoredVision[] => {
  return visions.map((vision) => {
    const colorModifier = vision.colorModifier ?? identity;
    const contrastScore =
      (1 + (vision.contrastModifier ?? 0)) *
      colorModifier(backgroundColor).contrast(colorModifier(foregroundColor));

    return {
      ...vision,
      contrastScore,
      largeFontWcagLevel: computeWcagLevel(contrastScore, 32),
      regularFontWcagLevel: computeWcagLevel(contrastScore, 16),
    };
  });
};

export { computeScoredVisionForPair };
