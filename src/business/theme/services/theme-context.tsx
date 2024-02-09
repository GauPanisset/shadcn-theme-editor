import { createContext, useContext, useMemo } from 'react';

import { assertNotNull } from '@/technical/typescript/assertions/assert-not-null';
import { DeepPartial } from '@/technical/typescript/deep-partial';

import { Theme, ThemeMode } from '../model/type';
import { useTheme } from './use-theme';

type ThemeContextType = {
  canRedo: boolean;
  canUndo: boolean;
  theme: Theme;
  themeMode: ThemeMode;
  redoThemeHistory: () => void;
  undoThemeHistory: () => void;
  updateTheme: (
    theme: DeepPartial<Theme>,
    options?: { shouldUpdateHistory?: boolean }
  ) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const useThemeContext = () =>
  assertNotNull(
    useContext(ThemeContext),
    'ThemeContext is not initialized yet'
  );

type Props = {
  children: React.ReactNode;
};

const ThemeProvider: React.FunctionComponent<Props> = ({ children }) => {
  const {
    theme,
    themeMode,
    updateTheme,
    canRedo,
    canUndo,
    undoThemeHistory,
    redoThemeHistory,
  } = useTheme();

  const themeContext = useMemo(
    () => ({
      canUndo,
      canRedo,
      redoThemeHistory,
      theme,
      themeMode,
      undoThemeHistory,
      updateTheme,
    }),
    [
      canRedo,
      canUndo,
      redoThemeHistory,
      theme,
      themeMode,
      undoThemeHistory,
      updateTheme,
    ]
  );

  return (
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider, useThemeContext };
