import { ColorsTheme } from '../model/type';

const colorsThemeVariables: Record<keyof ColorsTheme, `--${string}`> = {
  foreground: '--foreground',
  background: '--background',
  card: '--card',
  cardForeground: '--card-foreground',
  popover: '--popover',
  popoverForeground: '--popover-foreground',
  primary: '--primary',
  primaryForeground: '--primary-foreground',
  secondary: '--secondary',
  secondaryForeground: '--secondary-foreground',
  muted: '--muted',
  mutedForeground: '--muted-foreground',
  accent: '--accent',
  accentForeground: '--accent-foreground',
  destructive: '--destructive',
  destructiveForeground: '--destructive-foreground',
  border: '--border',
  input: '--input',
  ring: '--ring',
};

const setColorInCss = (colorKey: keyof ColorsTheme, hslColor: string) => {
  document
    ?.getElementById('demo-wrapper')
    ?.style.setProperty(colorsThemeVariables[colorKey], hslColor);
};

export { setColorInCss };
