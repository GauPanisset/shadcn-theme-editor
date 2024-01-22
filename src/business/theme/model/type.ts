type ColorsTheme = {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
};

type Preset = {
  name: string;
  label: string;
  activeColor: {
    light: string;
    dark: string;
  };
  theme: Omit<Theme, 'borderRadius'> & Partial<Pick<Theme, 'borderRadius'>>;
};

type Theme = {
  dark: ColorsTheme;
  light: ColorsTheme;
  borderRadius: number;
};

type ThemeFormData = {
  colors: ColorsTheme;
  shape: { borderRadius: Theme['borderRadius'] };
};

export type { ColorsTheme, Preset, Theme, ThemeFormData };
