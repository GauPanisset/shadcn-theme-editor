import { z } from 'zod';

import { ThemeFormData } from './type';
const themeFormSchema = z.object({
  colors: z.object({
    foreground: z.string(),
    background: z.string(),
    card: z.string(),
    cardForeground: z.string(),
    popover: z.string(),
    popoverForeground: z.string(),
    primary: z.string(),
    primaryForeground: z.string(),
    secondary: z.string(),
    secondaryForeground: z.string(),
    muted: z.string(),
    mutedForeground: z.string(),
    accent: z.string(),
    accentForeground: z.string(),
    destructive: z.string(),
    destructiveForeground: z.string(),
    border: z.string(),
    input: z.string(),
    ring: z.string(),
  }),
  shape: z.object({
    borderRadius: z.number(),
  }),
  /**
   * This `satisfies` actually does not check if the schema contains more keys than the type.
   * But it is the best solution so far since it just does not feel natural to define
   * the Theme type from the schema.
   */
}) satisfies z.ZodType<ThemeFormData>;

export { themeFormSchema };
