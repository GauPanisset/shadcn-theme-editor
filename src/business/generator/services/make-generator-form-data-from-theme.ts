import Color from 'color';

import { Theme, ThemeMode } from '@/business/theme/model/type';
import { translateColorFromHslToHex } from '@/business/theme/services/translate-theme-colors';

import { GeneratorFormData } from '../model/type';

const makeGeneratorFormDataFromTheme = (
  theme: Omit<Theme, 'borderRadius'>,
  themeMode: ThemeMode
): GeneratorFormData => ({
  borderLightness: Math.round(
    Color(`hsl(${theme[themeMode].border})`).lightness() -
      (themeMode === 'dark' ? 0 : 50)
  ),
  borderSaturation: Color(`hsl(${theme[themeMode].border})`).saturationl(),
  cardLightness: Math.round(
    Color(`hsl(${theme[themeMode].card})`).lightness() -
      (themeMode === 'dark' ? 0 : 50)
  ),
  cardSaturation: Color(`hsl(${theme[themeMode].card})`).saturationl(),
  primary: translateColorFromHslToHex(theme[themeMode].primary),
  secondary: translateColorFromHslToHex(theme[themeMode].secondary),
  background: translateColorFromHslToHex(theme[themeMode].background),
});

export { makeGeneratorFormDataFromTheme };
