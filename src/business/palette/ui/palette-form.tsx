'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { PresetMenu } from '@/business/preset/ui/preset-menu';
import {
  translateColorsThemeFromHexToHsl,
  translateColorsThemeFromHslToHex,
} from '@/business/theme/services/translate-theme-colors';
import { useTheme } from '@/business/theme/services/use-theme';
import { ThemeCodePreview } from '@/business/theme/ui/theme-code-preview';
import { ThemeModeSwitch } from '@/business/theme/ui/theme-mode-switch';
import { Form } from '@/technical/ui/form';
import { Separator } from '@/technical/ui/separator';

import { paletteFormSchema } from '../model/schema';
import { PaletteFormData } from '../model/type';
import { PaletteFormDuoField } from './palette-form-duo-field';
import { PaletteFormField } from './palette-form-field';
import { PaletteFormNumberField } from './palette-form-number-field';
import { PaletteResetButton } from './palette-reset-button';

const PaletteForm = () => {
  const { theme, themeMode, updateColors, updateBorderRadius } = useTheme();

  const form = useForm<PaletteFormData>({
    resolver: zodResolver(paletteFormSchema),
    defaultValues: {
      colors: translateColorsThemeFromHslToHex(theme[themeMode]),
      shape: { borderRadius: theme.borderRadius },
    },
    mode: 'onBlur',
  });

  const onSubmit = (values: PaletteFormData) => {
    updateColors(translateColorsThemeFromHexToHsl(values.colors));
    updateBorderRadius(values.shape.borderRadius);
  };

  useEffect(() => {
    form.reset({
      colors: translateColorsThemeFromHslToHex(theme[themeMode]),
      shape: { borderRadius: theme.borderRadius },
    });
  }, [theme, themeMode, form]);

  return (
    <Form {...form}>
      <form
        onBlur={form.handleSubmit(onSubmit)}
        onSubmit={(event) => {
          event.preventDefault();
        }}
        className="flex h-full flex-col space-y-2"
      >
        <div className="flex w-fit items-center space-x-2">
          <PaletteResetButton />
          <ThemeCodePreview />
          <PresetMenu />
          <Separator orientation="vertical" className="h-8" />
          <ThemeModeSwitch />
        </div>
        <div className="flex flex-1">
          <PaletteFormDuoField
            control={form.control}
            items={[
              { name: 'colors.background', label: 'Background' },
              { name: 'colors.foreground', label: 'Foreground' },
            ]}
          />
        </div>
        <div className="flex flex-1">
          <PaletteFormDuoField
            control={form.control}
            items={[
              { name: 'colors.card', label: 'Card background' },
              { name: 'colors.cardForeground', label: 'Card foreground' },
            ]}
          />
        </div>
        <div className="flex flex-1">
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
        </div>
        <div className="flex flex-1">
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
        </div>
        <div className="flex flex-1">
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
        </div>
        <div className="flex flex-1">
          <PaletteFormDuoField
            control={form.control}
            items={[
              { name: 'colors.accent', label: 'Accent background' },
              { name: 'colors.accentForeground', label: 'Accent foreground' },
            ]}
          />
        </div>
        <div className="flex flex-1">
          <PaletteFormDuoField
            control={form.control}
            items={[
              { name: 'colors.muted', label: 'Muted background' },
              { name: 'colors.mutedForeground', label: 'Muted foreground' },
            ]}
          />
        </div>
        <div className="flex flex-1">
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
        </div>
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
    </Form>
  );
};

export { PaletteForm };
