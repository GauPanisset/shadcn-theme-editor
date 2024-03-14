'use client';

import { useMemo } from 'react';

import { useThemeContext } from '@/business/theme/services/theme-context';
import {
  translateColorsThemeFromHexToHsl,
  translateColorsThemeFromHslToHex,
} from '@/business/theme/services/translate-theme-colors';
import { useThemeForm } from '@/business/theme/services/use-theme-form';
import { FormActionsBar } from '@/business/theme/ui/form-actions-bar';
import { Form } from '@/technical/ui/form';

import { PaletteFormField } from '../../theme/ui/palette-form-field';
import { paletteFormSchema } from '../model/schema';
import { PaletteFormDuoField } from './palette-form-duo-field';
import { PaletteFormNumberField } from './palette-form-number-field';

const PaletteForm = () => {
  const { theme, themeMode } = useThemeContext();

  const defaultValues = useMemo(
    () => ({
      colors: translateColorsThemeFromHslToHex(theme[themeMode]),
      shape: { borderRadius: theme.borderRadius },
    }),
    [theme, themeMode]
  );

  const { form, handleBlur, handleChange } = useThemeForm({
    defaultValues,
    formSchema: paletteFormSchema,
    translateFormDataToTheme: (values) => {
      return {
        [themeMode]: translateColorsThemeFromHexToHsl(values.colors),
        borderRadius: values.shape.borderRadius,
      };
    },
  });

  return (
    <Form {...form}>
      <div className="flex h-full flex-col">
        <FormActionsBar />
        <form
          onBlur={handleBlur}
          onChange={handleChange}
          onSubmit={(event) => {
            event.preventDefault();
          }}
          className="mt-1 flex min-h-0 flex-1 flex-col space-y-2 overflow-auto px-6 py-1"
        >
          <PaletteFormDuoField
            control={form.control}
            items={[
              { name: 'colors.background', label: 'Background' },
              { name: 'colors.foreground', label: 'Foreground' },
            ]}
          />
          <PaletteFormDuoField
            control={form.control}
            items={[
              { name: 'colors.card', label: 'Card background' },
              { name: 'colors.cardForeground', label: 'Card foreground' },
            ]}
          />
          <PaletteFormDuoField
            control={form.control}
            items={[
              { name: 'colors.popover', label: 'Popover background' },
              {
                name: 'colors.popoverForeground',
                label: 'Popover foreground',
              },
            ]}
          />
          <PaletteFormDuoField
            control={form.control}
            items={[
              { name: 'colors.primary', label: 'Primary background' },
              {
                name: 'colors.primaryForeground',
                label: 'Primary foreground',
              },
            ]}
          />
          <PaletteFormDuoField
            control={form.control}
            items={[
              { name: 'colors.secondary', label: 'Secondary background' },
              {
                name: 'colors.secondaryForeground',
                label: 'Secondary foreground',
              },
            ]}
          />
          <PaletteFormDuoField
            control={form.control}
            items={[
              { name: 'colors.accent', label: 'Accent background' },
              { name: 'colors.accentForeground', label: 'Accent foreground' },
            ]}
          />
          <PaletteFormDuoField
            control={form.control}
            items={[
              { name: 'colors.muted', label: 'Muted background' },
              { name: 'colors.mutedForeground', label: 'Muted foreground' },
            ]}
          />
          <PaletteFormDuoField
            control={form.control}
            items={[
              { name: 'colors.destructive', label: 'Destructive background' },
              {
                name: 'colors.destructiveForeground',
                label: 'Destructive foreground',
              },
            ]}
          />
          <div className="flex flex-1 space-x-4">
            <PaletteFormField
              control={form.control}
              name="colors.ring"
              label="Ring"
              className="rounded-xl border hover:grow-[2]"
            />
            <PaletteFormField
              control={form.control}
              name="colors.input"
              label="Input"
              className="rounded-xl border hover:grow-[2]"
            />
          </div>
          <div className="flex flex-1 space-x-4">
            <PaletteFormField
              control={form.control}
              name="colors.border"
              label="Border"
              className="rounded-xl border hover:grow-[2]"
            />
            <PaletteFormNumberField
              control={form.control}
              name="shape.borderRadius"
              label="Border radius"
            />
          </div>
        </form>
      </div>
    </Form>
  );
};

export { PaletteForm };
