import Color from 'color';
import blinder from 'color-blind';

import { Vision } from './model/types';

const withColor =
  (blinderFunction: (color: string) => string) => (color: Color) =>
    Color(blinderFunction(color.hex()));

/**
 * From https://www.whocanuse.com
 */
const visions: Vision[] = [
  {
    name: 'Regular Vision (Trichromatic)',
    type: 'regular',
    description:
      'Can distinguish all three primary colors, little to no blurriness',
    percent: 68.0,
  },
  {
    name: 'Protanomaly',
    type: 'protanomaly',
    description:
      'Reduced sensitivity to red - trouble distinguishing reds and greens',
    colorModifier: withColor(blinder.protanomaly),
    percent: 1.3,
  },
  {
    name: 'Protanopia',
    type: 'protanopia',
    description: 'Red blind - Can’t see reds at all',
    colorModifier: withColor(blinder.protanopia),
    percent: 1.5,
  },
  {
    name: 'Deuteranomaly',
    type: 'deuteranomaly',
    description:
      'Reduced sensitivity to green - Trouble distinguishing reds and greens',
    colorModifier: withColor(blinder.deuteranomaly),
    percent: 5.3,
  },
  {
    name: 'Deuteranopia',
    type: 'deuteranopia',
    description: 'Green blind - Can’t see greens at all',
    colorModifier: withColor(blinder.deuteranopia),
    percent: 1.2,
  },
  {
    name: 'Tritanomaly',
    type: 'tritanomaly',
    description:
      'Trouble distinguishing blues and greens, and yellows and reds',
    colorModifier: withColor(blinder.tritanomaly),
    percent: 0.02,
  },
  {
    name: 'Tritanopia',
    type: 'tritanopia',
    description:
      'Unable to distinguish between blues and greens, purples and reds, and yellows and pinks',
    colorModifier: withColor(blinder.tritanopia),
    percent: 0.03,
  },
  {
    name: 'Achromatomaly',
    type: 'achromatomaly',
    description: 'Partial color blindness, sees the absence of most colors',
    colorModifier: withColor(blinder.achromatomaly),
    percent: 0.09,
  },
  {
    name: 'Achromatopsia',
    type: 'achromatopsia',
    description: 'Complete color blindness, can only see shades',
    colorModifier: withColor(blinder.achromatopsia),
    percent: 0.05,
  },
  {
    name: 'Cataracts',
    type: 'cataracts',
    description: 'Clouding of the lens in the eye that affects vision',
    contrastModifier: -0.2,
    percent: 33.0,
  },
  {
    name: 'Glaucoma',
    type: 'glaucoma',
    description: 'Slight vision loss',
    percent: 2.0,
  },
  {
    name: 'Low Vision',
    type: 'lowvision',
    description:
      'Decreased and/or blurry vision (not fixable by usual means such as glasses)',
    contrastModifier: -0.2,
    percent: 31.0,
  },
] as const;

export { visions };
