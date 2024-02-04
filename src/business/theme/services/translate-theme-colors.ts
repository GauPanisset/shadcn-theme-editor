import Color from 'color';

import { ColorsTheme } from '../model/type';

const translateColorFromHexToHsl = (hexColor: string) =>
  Color(hexColor)
    .hsl()
    .array()
    .map(
      (value, index) =>
        `${Math.round(value * 100) / 100}${index > 0 ? '%' : ''}`
    )
    .join(' ');

const translateColorFromHslToHex = (hslColor: string) =>
  Color(`hsl(${hslColor})`).hex();

const translateColorsThemeFromHslToHex = (theme: ColorsTheme) =>
  Object.fromEntries(
    Object.entries(theme).map(([themeKey, hslColor]) => [
      themeKey,
      translateColorFromHslToHex(hslColor),
    ])
    /**
     * Safe use of `as` here by construction.
     */
  ) as ColorsTheme;

const translateColorsThemeFromHexToHsl = (theme: ColorsTheme) =>
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
  translateColorFromHexToHsl,
  translateColorFromHslToHex,
  translateColorsThemeFromHexToHsl,
  translateColorsThemeFromHslToHex,
};
