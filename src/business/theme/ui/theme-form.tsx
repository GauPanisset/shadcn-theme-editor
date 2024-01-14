'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { RotateCcw } from 'lucide-react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/technical/ui/button';
import { Form } from '@/technical/ui/form';

import { themeSchema } from '../model/schema';
import { Theme } from '../model/type';
import { useTheme } from '../services/use-theme';
import { ThemeFormDuoField } from './theme-form-duo-field';
import { ThemeFormField } from './theme-form-field';
import { ThemeModeSwitch } from './theme-mode-switch';

const ThemeForm = () => {
  const { theme, resetTheme, updateTheme } = useTheme();

  const form = useForm<Theme>({
    resolver: zodResolver(themeSchema),
    defaultValues: theme,
    mode: 'onBlur',
  });

  const onSubmit = (values: Theme) => {
    updateTheme(values);
  };

  useEffect(() => {
    form.reset(theme);
  }, [form, theme]);

  return (
    <>
      <Form {...form}>
        <form
          onBlur={form.handleSubmit(onSubmit)}
          className="flex h-full flex-col space-y-2"
        >
          <div className="flex flex-1">
            <ThemeFormDuoField
              control={form.control}
              items={[
                { name: 'background', label: 'Background' },
                { name: 'foreground', label: 'Foreground' },
              ]}
            />
          </div>
          <div className="flex flex-1">
            <ThemeFormDuoField
              control={form.control}
              items={[
                { name: 'card', label: 'Card background' },
                { name: 'cardForeground', label: 'Card foreground' },
              ]}
            />
          </div>
          <div className="flex flex-1">
            <ThemeFormDuoField
              control={form.control}
              items={[
                { name: 'popover', label: 'Popover background' },
                { name: 'popoverForeground', label: 'Popover foreground' },
              ]}
            />
          </div>
          <div className="flex flex-1">
            <ThemeFormDuoField
              control={form.control}
              items={[
                { name: 'primary', label: 'Primary background' },
                { name: 'primaryForeground', label: 'Primary foreground' },
              ]}
            />
          </div>
          <div className="flex flex-1">
            <ThemeFormDuoField
              control={form.control}
              items={[
                { name: 'secondary', label: 'Secondary background' },
                { name: 'secondaryForeground', label: 'Secondary foreground' },
              ]}
            />
          </div>
          <div className="flex flex-1">
            <ThemeFormDuoField
              control={form.control}
              items={[
                { name: 'accent', label: 'Accent background' },
                { name: 'accentForeground', label: 'Accent foreground' },
              ]}
            />
          </div>
          <div className="flex flex-1">
            <ThemeFormDuoField
              control={form.control}
              items={[
                { name: 'muted', label: 'Muted background' },
                { name: 'mutedForeground', label: 'Muted foreground' },
              ]}
            />
          </div>
          <div className="flex flex-1">
            <ThemeFormDuoField
              control={form.control}
              items={[
                { name: 'destructive', label: 'Destructive background' },
                {
                  name: 'destructiveForeground',
                  label: 'Destructive foreground',
                },
              ]}
            />
          </div>
          <div className="relative flex flex-[3]">
            <div className="flex h-full w-full flex-col space-y-2">
              <div className="flex-1">
                <ThemeFormField
                  control={form.control}
                  name="border"
                  label="Border"
                  className="w-1/2 rounded-xl border hover:w-2/3"
                />
              </div>
              <div className="flex-1">
                <ThemeFormField
                  control={form.control}
                  name="ring"
                  label="Ring"
                  className="w-1/2 rounded-xl border hover:w-2/3"
                />
              </div>
              <div className="flex-1">
                <ThemeFormField
                  control={form.control}
                  name="input"
                  label="Input"
                  className="w-1/2 rounded-xl border hover:w-2/3"
                />
              </div>
            </div>
            <div className="absolute bottom-0 right-0 flex h-full w-fit flex-col-reverse space-y-2">
              <Button
                type="button"
                className="rounded-full"
                variant="ghost"
                size="icon"
                onClick={resetTheme}
              >
                <RotateCcw />
              </Button>
              <ThemeModeSwitch />
            </div>
          </div>
        </form>
      </Form>
    </>
  );
};

export { ThemeForm };
