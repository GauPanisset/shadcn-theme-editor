import color from 'color';
import { useAtom } from 'jotai';
import { atomWithStorage, RESET } from 'jotai/utils';
import { useTheme as useThemeMode } from 'next-themes';
import { useEffect, useMemo } from 'react';

import { Theme } from '../model/type';
import { setThemeInCss } from './set-theme-in-css';

const themesAtom = atomWithStorage<{
  dark: Theme;
  light: Theme;
}>('themes', {
  dark: {
    background: '222.2 84% 4.9%',
    foreground: ' 210 40% 98%',
    card: '222.2 84% 4.9%',
    cardForeground: ' 210 40% 98%',
    popover: '222.2 84% 4.9%',
    popoverForeground: ' 210 40% 98%',
    primary: '210 40% 98%',
    primaryForeground: '222.2 47.4% 11.2%',
    secondary: '217.2 32.6% 17.5%',
    secondaryForeground: ' 210 40% 98%',
    muted: '217.2 32.6% 17.5%',
    mutedForeground: '215 20.2% 65.1%',
    accent: '217.2 32.6% 17.5%',
    accentForeground: '210 40% 98%',
    destructive: '0 62.8% 30.6%',
    destructiveForeground: ' 210 40% 98%',
    border: '217.2 32.6% 17.5%',
    input: '217.2 32.6% 17.5%',
    ring: '212.7 26.8% 83.9%',
  },
  light: {
    background: '0 0% 100%',
    foreground: '222.2 84% 4.9%',
    card: '0 0% 100%',
    cardForeground: '222.2 84% 4.9%',
    popover: '0 0% 100%',
    popoverForeground: '222.2 84% 4.9%',
    primary: '222.2 47.4% 11.2%',
    primaryForeground: '210 40% 98%',
    secondary: '210 40% 96.1%',
    secondaryForeground: '222.2 47.4% 11.2%',
    muted: '210 40% 96.1%',
    mutedForeground: '215.4 16.3% 46.9%',
    accent: '210 40% 96.1%',
    accentForeground: '222.2 47.4% 11.2%',
    destructive: '0 84.2% 60.2%',
    destructiveForeground: '210 40% 98%',
    border: '214.3 31.8% 91.4%',
    input: '214.3 31.8% 91.4%',
    ring: '222.2 84% 4.9%',
  },
});

const assertThemeMode = (
  maybeThemeMode: string | undefined,
  fallbackThemeMode: 'dark' | 'light' | undefined
) => {
  if (maybeThemeMode !== 'dark' && maybeThemeMode !== 'light') {
    if (!fallbackThemeMode) {
      throw new Error('The theme mode must be either "dark" or "light"');
    }
    return fallbackThemeMode;
  }

  return maybeThemeMode;
};

const translateThemeFromHslToHex = (theme: Theme) =>
  Object.fromEntries(
    Object.entries(theme).map(([themeKey, hslColor]) => [
      themeKey,
      color(`hsl(${hslColor})`).hex(),
    ])
  ) as Theme;

const translateThemeFromHexToHsl = (theme: Theme) =>
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
  ) as Theme;

const useTheme = () => {
  const [themes, setThemes] = useAtom(themesAtom);

  const { theme: themeMode, systemTheme } = useThemeMode();
  const currentThemeMode = assertThemeMode(themeMode, systemTheme);
  const currentHslTheme = themes[currentThemeMode];

  useEffect(() => {
    setThemeInCss(currentHslTheme);
  }, [currentHslTheme]);

  const theme = useMemo(() => {
    return translateThemeFromHslToHex(currentHslTheme);
  }, [currentHslTheme]);

  const updateTheme = (newTheme: Theme) => {
    setThemes((currentTheme) => ({
      ...currentTheme,
      [currentThemeMode]: translateThemeFromHexToHsl(newTheme),
    }));
  };

  return { theme, themes, resetTheme: () => setThemes(RESET), updateTheme };
};

export { useTheme };
