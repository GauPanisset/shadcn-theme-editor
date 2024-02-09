'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { HistoryButtons } from '@/business/history/ui/history-buttons';
import { PresetMenu } from '@/business/preset/ui/preset-menu';
import { useThemeContext } from '@/business/theme/services/theme-context';
import {
  translateColorsThemeFromHexToHsl,
  translateColorsThemeFromHslToHex,
} from '@/business/theme/services/translate-theme-colors';
import { ThemeCodePreview } from '@/business/theme/ui/theme-code-preview';
import { ThemeModeSwitch } from '@/business/theme/ui/theme-mode-switch';
import { debounce } from '@/technical/helpers/debounce';
import { Form } from '@/technical/ui/form';
import { Separator } from '@/technical/ui/separator';

import { paletteFormSchema } from '../model/schema';
import { PaletteFormData } from '../model/type';
import { PaletteFormDuoField } from './palette-form-duo-field';
import { PaletteFormField } from './palette-form-field';
import { PaletteFormNumberField } from './palette-form-number-field';

const PaletteForm = () => {
  const { theme, themeMode, updateTheme } = useThemeContext();

  const form = useForm<PaletteFormData>({
    resolver: zodResolver(paletteFormSchema),
    defaultValues: {
      colors: translateColorsThemeFromHslToHex(theme[themeMode]),
      shape: { borderRadius: theme.borderRadius },
    },
    mode: 'onChange',
  });

  const onBlur = (values: PaletteFormData) => {
    updateTheme({
      [themeMode]: translateColorsThemeFromHexToHsl(values.colors),
      borderRadius: values.shape.borderRadius,
    });
  };

  /**
   * To prevent theme history flooding, we only push the theme on blur not on change.
   */
  const onChange = (values: PaletteFormData) => {
    updateTheme(
      {
        [themeMode]: translateColorsThemeFromHexToHsl(values.colors),
        borderRadius: values.shape.borderRadius,
      },
      { shouldUpdateHistory: false }
    );
  };

  useEffect(() => {
    form.reset({
      colors: translateColorsThemeFromHslToHex(theme[themeMode]),
      shape: { borderRadius: theme.borderRadius },
    });
  }, [theme, themeMode, form]);

  return (
    <Form {...form}>
      <div className="flex h-full flex-col">
        <div className="flex w-fit items-center space-x-2 px-6">
          <HistoryButtons />
          <Separator orientation="vertical" className="h-8" />
          <PresetMenu />
          <ThemeCodePreview />
          <Separator orientation="vertical" className="h-8" />
          <ThemeModeSwitch />
        </div>
        <form
          onChange={debounce(form.handleSubmit(onChange), 300)}
          onBlur={form.handleSubmit(onBlur)}
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
