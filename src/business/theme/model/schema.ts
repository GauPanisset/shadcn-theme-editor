import { z } from 'zod';

const ColorKeys = {
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

const ShapeKeys = {
  BorderRadius: 'borderRadius',
} as const;

const themeSchema = z.object({
  colors: z.object({
    [ColorKeys.Foreground]: z.string(),
    [ColorKeys.Background]: z.string(),
    [ColorKeys.Card]: z.string(),
    [ColorKeys.CardForeground]: z.string(),
    [ColorKeys.Popover]: z.string(),
    [ColorKeys.PopoverForeground]: z.string(),
    [ColorKeys.Primary]: z.string(),
    [ColorKeys.PrimaryForeground]: z.string(),
    [ColorKeys.Secondary]: z.string(),
    [ColorKeys.SecondaryForeground]: z.string(),
    [ColorKeys.Muted]: z.string(),
    [ColorKeys.MutedForeground]: z.string(),
    [ColorKeys.Accent]: z.string(),
    [ColorKeys.AccentForeground]: z.string(),
    [ColorKeys.Destructive]: z.string(),
    [ColorKeys.DestructiveForeground]: z.string(),
    [ColorKeys.Border]: z.string(),
    [ColorKeys.Input]: z.string(),
    [ColorKeys.Ring]: z.string(),
  }),
  shape: z.object({
    [ShapeKeys.BorderRadius]: z.preprocess(
      (x: unknown) => parseFloat(String(x)),
      z.number()
    ),
  }),
});

export { ColorKeys, ShapeKeys, themeSchema };
