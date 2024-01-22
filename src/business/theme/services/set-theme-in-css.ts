import { ColorsTheme, Theme } from '../model/type';

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

const setThemeInCss = (theme: {
  colors: ColorsTheme;
  shape: { borderRadius: Theme['borderRadius'] };
}) => {
  if (typeof window === 'undefined') {
    return;
  }

  for (const colorKey in colorsThemeVariables) {
    document
      ?.getElementById('demo-wrapper')
      ?.style.setProperty(
        colorsThemeVariables[colorKey as keyof ColorsTheme],
        theme.colors[colorKey as keyof ColorsTheme]
      );
  }

  document
    ?.getElementById('demo-wrapper')
    ?.style.setProperty('--radius', `${String(theme.shape.borderRadius)}rem`);
};

export { setThemeInCss };
