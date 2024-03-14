import Color from 'color';

import { enhanceContrast } from '@/business/contrast/services/enhance-contrast';
import { ColorsTheme, ThemeMode } from '@/business/theme/model/type';
import { getHslParamsFromColor } from '@/business/theme/services/translate-theme-colors';

const makeForegroundColorFromBackgroundColor = (backgroundColor: Color) =>
  enhanceContrast(
    backgroundColor,
    backgroundColor.isDark()
      ? backgroundColor.l(backgroundColor.l() + 10)
      : backgroundColor.l(backgroundColor.l() - 10),
    'foreground'
  ).foregroundColor;

const createCardColor = (
  background: Color,
  cardLightness: number,
  cardSaturation: number,
  themeMode: ThemeMode
) =>
  background
    .saturationl(cardSaturation)
    .lightness(themeMode === 'dark' ? cardLightness : 50 + cardLightness);

const createForegroundColor = (primary: Color, themeMode: ThemeMode) =>
  themeMode === 'dark'
    ? primary.saturationl(20).lightness(98)
    : primary.saturationl(65).lightness(2);

const createAccentColor = (primary: Color, themeMode: ThemeMode) =>
  primary
    .saturationl(themeMode === 'dark' ? 20 : 30)
    .lightness(themeMode === 'dark' ? 25 : 90);

const createMutedColor = (primary: Color, themeMode: ThemeMode) =>
  primary.saturationl(5).lightness(themeMode === 'dark' ? 15 : 95);

const createDestructiveColor = (primary: Color) =>
  Color({
    h: 5,
    s: 80 + (primary.saturationl() / 100) * (100 - 80),
    l: 20 + (primary.l() / 100) * (45 - 20),
  });

const createBorderColor = (
  primary: Color,
  borderLightness: number,
  borderSaturation: number,
  themeMode: ThemeMode
) =>
  primary
    .lightness(themeMode === 'dark' ? borderLightness : 50 + borderLightness)
    .saturationl(borderSaturation);

const generateTheme = (
  borderLightness: number,
  borderSaturation: number,
  cardLightness: number,
  cardSaturation: number,
  primary: Color,
  secondary: Color,
  background: Color,
  themeMode: ThemeMode
): ColorsTheme => {
  const foreground = createForegroundColor(primary, themeMode);
  const card = createCardColor(
    background,
    cardLightness,
    cardSaturation,
    themeMode
  );
  const accent = createAccentColor(primary, themeMode);
  const muted = createMutedColor(primary, themeMode);
  const destructive = createDestructiveColor(primary);
  const border = createBorderColor(
    primary,
    borderLightness,
    borderSaturation,
    themeMode
  );

  return {
    background: getHslParamsFromColor(background),
    foreground: getHslParamsFromColor(foreground),
    card: getHslParamsFromColor(card),
    cardForeground: getHslParamsFromColor(foreground),
    popover: getHslParamsFromColor(
      card.lightness(
        card.lightness() + (card.lightness() - background.lightness())
      )
    ),
    popoverForeground: getHslParamsFromColor(foreground),
    primary: getHslParamsFromColor(primary),
    primaryForeground: getHslParamsFromColor(
      makeForegroundColorFromBackgroundColor(primary)
    ),
    secondary: getHslParamsFromColor(secondary),
    secondaryForeground: getHslParamsFromColor(
      makeForegroundColorFromBackgroundColor(secondary)
    ),
    muted: getHslParamsFromColor(muted),
    mutedForeground: getHslParamsFromColor(
      makeForegroundColorFromBackgroundColor(muted).saturate(-0.8)
    ),
    accent: getHslParamsFromColor(accent),
    accentForeground: getHslParamsFromColor(foreground),
    destructive: getHslParamsFromColor(destructive),
    destructiveForeground: getHslParamsFromColor(
      makeForegroundColorFromBackgroundColor(destructive)
    ),
    border: getHslParamsFromColor(border),
    input: getHslParamsFromColor(border),
    ring: getHslParamsFromColor(primary.saturate(0.3)),
  };
};

export { generateTheme };
