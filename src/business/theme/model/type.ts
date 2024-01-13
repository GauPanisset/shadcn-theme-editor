import { z } from 'zod';

import { themeSchema } from './schema';

type Theme = z.infer<typeof themeSchema>;

export type { Theme };
