import { useCallback, useReducer, useRef } from 'react';

import { Theme } from '@/business/theme/model/type';

import { makeThemeHistoryReducerWithCallback } from './theme-history-reducer';

type UseThemeHistoryProps = {
  initialTheme: Theme;
  onCurrentThemeChange: (theme: Theme) => void;
};

const useThemeHistory = ({
  initialTheme,
  onCurrentThemeChange,
}: UseThemeHistoryProps) => {
  const initialThemeRef = useRef(initialTheme);

  const [state, dispatch] = useReducer(
    makeThemeHistoryReducerWithCallback(onCurrentThemeChange),
    {
      past: [],
      future: [],
      present: initialThemeRef.current,
    }
  );

  const canUndo = state.past.length !== 0;
  const canRedo = state.future.length !== 0;

  const undo = useCallback(() => {
    if (canUndo) {
      dispatch({ type: 'UNDO' });
    }
  }, [canUndo]);

  const redo = useCallback(() => {
    if (canRedo) {
      dispatch({ type: 'REDO' });
    }
  }, [canRedo]);

  const set = useCallback(
    (newPresentTheme: Theme) => dispatch({ type: 'SET', newPresentTheme }),
    []
  );

  const clear = useCallback(
    () => dispatch({ type: 'CLEAR', newPresentTheme: initialThemeRef.current }),
    []
  );

  return {
    currentThemeInHistory: state.present,
    canUndo,
    canRedo,
    undoThemeHistory: undo,
    redoThemeHistory: redo,
    pushInThemeHistory: set,
    clearThemeHistory: clear,
  };
};

export { useThemeHistory };
