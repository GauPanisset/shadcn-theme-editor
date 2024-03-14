import Color from 'color';

import { ColorsTheme } from '../model/type';

const getHslParamsFromColor = (color: Color): string =>
  color
    .hsl()
    .array()
    .map(
      (value, index) =>
        `${Math.round(value * 100) / 100}${index > 0 ? '%' : ''}`
    )
    .join(' ');

const translateColorFromHexToHsl = (hexColor: string) =>
  getHslParamsFromColor(Color(hexColor));

const translateColorFromHslToHex = (hslColor: string) =>
  Color(`hsl(${hslColor})`).hex();

const translateColorsThemeFromHslToHex = (theme: Partial<ColorsTheme>) =>
  Object.fromEntries(
    Object.entries(theme).map(([themeKey, hslColor]) => [
      themeKey,
      translateColorFromHslToHex(hslColor),
    ])
    /**
     * Safe use of `as` here by construction.
     */
  ) as ColorsTheme;

const translateColorsThemeFromHexToHsl = (theme: Partial<ColorsTheme>) =>
  Object.fromEntries(
    Object.entries(theme).map(([themeKey, hexColor]) => [
      themeKey,
      translateColorFromHexToHsl(hexColor),
    ])
    /**
     * Safe use of `as` here by construction.
     */
  ) as ColorsTheme;

export {
  getHslParamsFromColor,
  translateColorFromHexToHsl,
  translateColorFromHslToHex,
  translateColorsThemeFromHexToHsl,
  translateColorsThemeFromHslToHex,
};
