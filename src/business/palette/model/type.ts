import { ColorsTheme, Theme } from '@/business/theme/model/type';

type PaletteFormData = {
  colors: ColorsTheme;
  shape: { borderRadius: Theme['borderRadius'] };
};

export type { PaletteFormData };
