'use client';

import Color from 'color';
import { Dices } from 'lucide-react';
import { useCallback } from 'react';

import { useThemeContext } from '@/business/theme/services/theme-context';
import { randomInt } from '@/technical/helpers/random-int';
import { Button } from '@/technical/ui/button';
import { KeyboardKey } from '@/technical/ui/keyboard-key';

import { generateTheme } from '../services/generate-theme';

const RandomThemeButton = () => {
  const { updateTheme } = useThemeContext();

  const makeRandomTheme = useCallback(() => {
    const primaryColor = Color({
      h: randomInt(0, 360),
      s: randomInt(0, 100),
      l: randomInt(20, 80),
    });
    const secondaryColor = Color({
      h: randomInt(0, 360),
      s: randomInt(0, 100),
      l: randomInt(20, 80),
    });
    const darkBackgroundColor = Color({
      h: primaryColor.hue(),
      s: randomInt(30, 70),
      l: randomInt(0, 4),
    });
    const lightBackgroundColor = Color({
      h: primaryColor.hue(),
      s: randomInt(30, 60),
      l: randomInt(98, 100),
    });

    const darkTheme = generateTheme({
      borderLightness: randomInt(
        darkBackgroundColor.lightness() - 4,
        darkBackgroundColor.lightness() + 4
      ),
      borderSaturation: randomInt(0, 100),
      cardLightness: randomInt(
        darkBackgroundColor.lightness() - 4,
        darkBackgroundColor.lightness() + 4
      ),
      cardSaturation: randomInt(0, 100),
      primary: primaryColor,
      secondary: secondaryColor,
      background: darkBackgroundColor,
      themeMode: 'dark',
    });

    const lightTheme = generateTheme({
      borderLightness: randomInt(
        lightBackgroundColor.lightness() - 4 - 50,
        lightBackgroundColor.lightness() + 4 - 50
      ),
      borderSaturation: randomInt(0, 100),
      cardLightness: randomInt(
        lightBackgroundColor.lightness() - 4 - 50,
        lightBackgroundColor.lightness() + 4 - 50
      ),
      cardSaturation: randomInt(0, 100),
      primary: primaryColor,
      secondary: secondaryColor,
      background: lightBackgroundColor,
      themeMode: 'light',
    });

    updateTheme({ dark: darkTheme, light: lightTheme });
  }, [updateTheme]);

  return (
    <Button onClick={makeRandomTheme} size="lg" keyboardShortcut={['space']}>
      <Dices className="mr-2 h-4 w-4" />
      Generate theme
      <KeyboardKey className="ml-4">space</KeyboardKey>
    </Button>
  );
};

export { RandomThemeButton };
