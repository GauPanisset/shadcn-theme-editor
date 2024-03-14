import { z } from 'zod';

const generatorFormSchema = z.object({
  borderLightness: z.number(),
  borderSaturation: z.number(),
  cardLightness: z.number(),
  cardSaturation: z.number(),
  primary: z.string(),
  secondary: z.string(),
  background: z.string(),
});

export { generatorFormSchema };
