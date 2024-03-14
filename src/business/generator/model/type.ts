import { z } from 'zod';

import { generatorFormSchema } from './schema';

type GeneratorFormData = z.infer<typeof generatorFormSchema>;

export type { GeneratorFormData };
