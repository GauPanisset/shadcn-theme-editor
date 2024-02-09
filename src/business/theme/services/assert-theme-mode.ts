import { ThemeMode } from '../model/type';

const assertThemeMode = (
  maybeThemeMode: string | undefined,
  fallbackThemeMode: ThemeMode | undefined
) => {
  if (maybeThemeMode !== 'dark' && maybeThemeMode !== 'light') {
    if (!fallbackThemeMode) {
      throw new Error('The theme mode must be either "dark" or "light"');
    }
    return fallbackThemeMode;
  }

  return maybeThemeMode;
};

export { assertThemeMode };
