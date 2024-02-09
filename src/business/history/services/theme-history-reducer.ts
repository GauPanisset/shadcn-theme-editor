import { Reducer } from 'react';

import { Theme } from '@/business/theme/model/type';

type Action =
  | {
      type: 'UNDO' | 'REDO';
    }
  | {
      type: 'SET' | 'CLEAR';
      newPresentTheme: Theme;
    };

type State = {
  past: Theme[];
  present: Theme;
  future: Theme[];
};

const makeThemeHistoryReducerWithCallback =
  (onCurrentThemeChange: (newTheme: Theme) => void): Reducer<State, Action> =>
  (state, action) => {
    const { past, present, future } = state;

    let newState = state;

    if (action.type === 'UNDO') {
      newState = {
        past: past.slice(0, past.length - 1),
        present: past[past.length - 1],
        future: [present, ...future],
      };
    } else if (action.type === 'REDO') {
      newState = {
        past: [...past, present],
        present: future[0],
        future: future.slice(1),
      };
    } else if (action.type === 'SET') {
      const { newPresentTheme } = action;

      if (action.newPresentTheme !== present) {
        newState = {
          past: [...past, present],
          present: newPresentTheme,
          future: [],
        };
      }
    } else if (action.type === 'CLEAR') {
      newState = {
        past: [],
        future: [],
        present: action.newPresentTheme,
      };
    } else {
      throw new Error('Unsupported action type');
    }

    onCurrentThemeChange(newState.present);

    return newState;
  };

export { makeThemeHistoryReducerWithCallback };
