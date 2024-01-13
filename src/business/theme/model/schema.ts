import { z } from 'zod';

const FieldKeys = {
  Foreground: 'foreground',
  Background: 'background',
  Card: 'card',
  CardForeground: 'cardForeground',
  Popover: 'popover',
  PopoverForeground: 'popoverForeground',
  Primary: 'primary',
  PrimaryForeground: 'primaryForeground',
  Secondary: 'secondary',
  SecondaryForeground: 'secondaryForeground',
  Muted: 'muted',
  MutedForeground: 'mutedForeground',
  Accent: 'accent',
  AccentForeground: 'accentForeground',
  Destructive: 'destructive',
  DestructiveForeground: 'destructiveForeground',
  Border: 'border',
  Input: 'input',
  Ring: 'ring',
} as const;

const themeSchema = z.object({
  [FieldKeys.Foreground]: z.string(),
  [FieldKeys.Background]: z.string(),
  [FieldKeys.Card]: z.string(),
  [FieldKeys.CardForeground]: z.string(),
  [FieldKeys.Popover]: z.string(),
  [FieldKeys.PopoverForeground]: z.string(),
  [FieldKeys.Primary]: z.string(),
  [FieldKeys.PrimaryForeground]: z.string(),
  [FieldKeys.Secondary]: z.string(),
  [FieldKeys.SecondaryForeground]: z.string(),
  [FieldKeys.Muted]: z.string(),
  [FieldKeys.MutedForeground]: z.string(),
  [FieldKeys.Accent]: z.string(),
  [FieldKeys.AccentForeground]: z.string(),
  [FieldKeys.Destructive]: z.string(),
  [FieldKeys.DestructiveForeground]: z.string(),
  [FieldKeys.Border]: z.string(),
  [FieldKeys.Input]: z.string(),
  [FieldKeys.Ring]: z.string(),
});

export { FieldKeys, themeSchema };
