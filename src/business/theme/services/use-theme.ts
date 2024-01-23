import { useAtom } from 'jotai';
import { atomWithStorage, RESET } from 'jotai/utils';
import { useTheme as useThemeMode } from 'next-themes';
import { useEffect } from 'react';

import { DeepPartial } from '@/technical/typescript/deep-partial';

import { ColorsTheme, Theme } from '../model/type';
import { setThemeInCss } from './set-theme-in-css';

const themeAtom = atomWithStorage<Theme>('theme-store', {
  dark: {
    background: '222.2 84% 4.9%',
    foreground: '210 40% 98%',
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
    destructiveForeground: '210 40% 98%',
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
  borderRadius: 1,
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

const useTheme = () => {
  const [theme, setTheme] = useAtom(themeAtom);

  const { theme: themeMode, systemTheme } = useThemeMode();
  const currentThemeMode = assertThemeMode(themeMode, systemTheme);
  const currentThemeColors = theme[currentThemeMode];
  const currentBorderRadius = theme.borderRadius;

  useEffect(() => {
    setThemeInCss({
      colors: currentThemeColors,
      shape: { borderRadius: currentBorderRadius },
    });
  }, [currentThemeColors, currentBorderRadius]);

  const updateBorderRadius = (borderRadius: Theme['borderRadius']) => {
    setTheme((currentTheme) => ({
      ...currentTheme,
      borderRadius: borderRadius,
    }));
  };

  const updateColors = (
    colors: Partial<ColorsTheme>,
    themeMode: 'dark' | 'light' = currentThemeMode
  ) => {
    setTheme((currentTheme) => ({
      ...currentTheme,
      [themeMode]: {
        ...currentTheme[themeMode],
        ...colors,
      },
    }));
  };

  const updateTheme = (theme: DeepPartial<Theme>) => {
    setTheme((currentTheme) => ({
      ...currentTheme,
      ...(theme.borderRadius !== undefined && {
        borderRadius: theme.borderRadius,
      }),
      ...(theme.dark !== undefined && {
        dark: {
          ...currentTheme.dark,
          ...theme.dark,
        },
      }),
      ...(theme.light !== undefined && {
        light: {
          ...currentTheme.light,
          ...theme.light,
        },
      }),
    }));
  };

  return {
    theme,
    themeMode: currentThemeMode,
    resetTheme: () => setTheme(RESET),
    updateBorderRadius,
    updateColors,
    updateTheme,
  };
};

export { useTheme };
