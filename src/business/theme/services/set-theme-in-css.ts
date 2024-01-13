import { FieldKeys } from '../model/schema';
import { Theme } from '../model/type';

const themeVariables: Record<
  (typeof FieldKeys)[keyof typeof FieldKeys],
  `--${string}`
> = {
  [FieldKeys.Foreground]: '--foreground',
  [FieldKeys.Background]: '--background',
  [FieldKeys.Card]: '--card',
  [FieldKeys.CardForeground]: '--card-foreground',
  [FieldKeys.Popover]: '--popover',
  [FieldKeys.PopoverForeground]: '--popover-foreground',
  [FieldKeys.Primary]: '--primary',
  [FieldKeys.PrimaryForeground]: '--primary-foreground',
  [FieldKeys.Secondary]: '--secondary',
  [FieldKeys.SecondaryForeground]: '--secondary-foreground',
  [FieldKeys.Muted]: '--muted',
  [FieldKeys.MutedForeground]: '--muted-foreground',
  [FieldKeys.Accent]: '--accent',
  [FieldKeys.AccentForeground]: '--accent-foreground',
  [FieldKeys.Destructive]: '--destructive',
  [FieldKeys.DestructiveForeground]: '--destructive-foreground',
  [FieldKeys.Border]: '--border',
  [FieldKeys.Input]: '--input',
  [FieldKeys.Ring]: '--ring',
};

const setThemeInCss = (theme: Theme) => {
  if (typeof window === 'undefined') {
    return;
  }

  for (const fieldKey of Object.values(FieldKeys)) {
    document
      ?.getElementById('demo-wrapper')
      ?.style.setProperty(themeVariables[fieldKey], theme[fieldKey]);
  }
};

export { setThemeInCss };
