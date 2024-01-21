import { ColorKeys, ShapeKeys } from '../model/schema';
import { Theme } from '../model/type';

const themeColorsVariables: Record<
  (typeof ColorKeys)[keyof typeof ColorKeys],
  `--${string}`
> = {
  [ColorKeys.Foreground]: '--foreground',
  [ColorKeys.Background]: '--background',
  [ColorKeys.Card]: '--card',
  [ColorKeys.CardForeground]: '--card-foreground',
  [ColorKeys.Popover]: '--popover',
  [ColorKeys.PopoverForeground]: '--popover-foreground',
  [ColorKeys.Primary]: '--primary',
  [ColorKeys.PrimaryForeground]: '--primary-foreground',
  [ColorKeys.Secondary]: '--secondary',
  [ColorKeys.SecondaryForeground]: '--secondary-foreground',
  [ColorKeys.Muted]: '--muted',
  [ColorKeys.MutedForeground]: '--muted-foreground',
  [ColorKeys.Accent]: '--accent',
  [ColorKeys.AccentForeground]: '--accent-foreground',
  [ColorKeys.Destructive]: '--destructive',
  [ColorKeys.DestructiveForeground]: '--destructive-foreground',
  [ColorKeys.Border]: '--border',
  [ColorKeys.Input]: '--input',
  [ColorKeys.Ring]: '--ring',
};

const setThemeInCss = (theme: Theme) => {
  if (typeof window === 'undefined') {
    return;
  }

  for (const colorKey of Object.values(ColorKeys)) {
    document
      ?.getElementById('demo-wrapper')
      ?.style.setProperty(
        themeColorsVariables[colorKey],
        theme.colors[colorKey]
      );
  }

  document
    ?.getElementById('demo-wrapper')
    ?.style.setProperty(
      '--radius',
      `${String(theme.shape[ShapeKeys.BorderRadius])}rem`
    );
};

export { setThemeInCss };
