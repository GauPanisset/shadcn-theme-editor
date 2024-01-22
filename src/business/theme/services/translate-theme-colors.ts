import color from 'color';

import { ColorsTheme } from '../model/type';

const translateColorsThemeFromHslToHex = (theme: ColorsTheme) =>
  Object.fromEntries(
    Object.entries(theme).map(([themeKey, hslColor]) => [
      themeKey,
      color(`hsl(${hslColor})`).hex(),
    ])
    /**
     * Safe use of `as` here by construction.
     */
  ) as ColorsTheme;

const translateColorsThemeFromHexToHsl = (theme: ColorsTheme) =>
  Object.fromEntries(
    Object.entries(theme).map(([themeKey, hexColor]) => [
      themeKey,
      color(hexColor)
        .hsl()
        .array()
        .map(
          (value, index) =>
            `${Math.round(value * 100) / 100}${index > 0 ? '%' : ''}`
        )
        .join(' '),
    ])
    /**
     * Safe use of `as` here by construction.
     */
  ) as ColorsTheme;

export { translateColorsThemeFromHexToHsl, translateColorsThemeFromHslToHex };
