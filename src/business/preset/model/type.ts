import { Theme } from '@/business/theme/model/type';

type Preset = {
  name: string;
  label: string;
  activeColor: {
    light: string;
    dark: string;
  };
  theme: Omit<Theme, 'borderRadius'> & Partial<Pick<Theme, 'borderRadius'>>;
};

export type { Preset };
