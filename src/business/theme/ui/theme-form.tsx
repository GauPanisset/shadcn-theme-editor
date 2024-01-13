'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/technical/ui/button';
import { Form } from '@/technical/ui/form';

import { themeSchema } from '../model/schema';
import { Theme } from '../model/type';
import { useTheme } from '../services/use-theme';
import { ThemeFormField } from './theme-form-field';

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
      <Button className="absolute bottom-4 right-4 z-50" onClick={resetTheme}>
        Reset
      </Button>
      <Form {...form}>
        <form
          onBlur={form.handleSubmit(onSubmit)}
          className="flex h-full flex-col font-mono"
        >
          <div className="flex grow">
            <ThemeFormField
              control={form.control}
              name="background"
              label="Background"
              title="Base"
            />
            <ThemeFormField
              control={form.control}
              name="foreground"
              label="Foreground"
            />
          </div>
          <div className="flex grow">
            <ThemeFormField
              control={form.control}
              name="card"
              label="Background"
              title="Card"
            />
            <ThemeFormField
              control={form.control}
              name="cardForeground"
              label="Foreground"
            />
          </div>
          <div className="flex grow">
            <ThemeFormField
              control={form.control}
              name="popover"
              label="Background"
              title="Popover"
            />
            <ThemeFormField
              control={form.control}
              name="popoverForeground"
              label="Foreground"
            />
          </div>
          <div className="flex grow">
            <ThemeFormField
              control={form.control}
              name="primary"
              label="Background"
              title="Primary"
            />
            <ThemeFormField
              control={form.control}
              name="primaryForeground"
              label="Foreground"
            />
          </div>
          <div className="flex grow">
            <ThemeFormField
              control={form.control}
              name="secondary"
              label="Background"
              title="Secondary"
            />
            <ThemeFormField
              control={form.control}
              name="secondaryForeground"
              label="Foreground"
            />
          </div>
          <div className="flex grow">
            <ThemeFormField
              control={form.control}
              name="accent"
              label="Background"
              title="Accent"
            />
            <ThemeFormField
              control={form.control}
              name="accentForeground"
              label="Foreground"
            />
          </div>
          <div className="flex grow">
            <ThemeFormField
              control={form.control}
              name="muted"
              label="Background"
              title="Muted"
            />
            <ThemeFormField
              control={form.control}
              name="mutedForeground"
              label="Foreground"
            />
          </div>
          <div className="flex grow">
            <ThemeFormField
              control={form.control}
              name="destructive"
              label="Background"
              title="Destructive"
            />
            <ThemeFormField
              control={form.control}
              name="cardForeground"
              label="Foreground"
            />
          </div>
          <div className="flex grow">
            <ThemeFormField
              control={form.control}
              name="border"
              label="Border"
              title="Border"
            />
          </div>
          <div className="flex grow">
            <ThemeFormField
              control={form.control}
              name="ring"
              label="Ring"
              title="Ring"
            />
          </div>
          <div className="flex grow">
            <ThemeFormField
              control={form.control}
              name="input"
              label="Input"
              title="Input"
            />
          </div>
        </form>
      </Form>
    </>
  );
};

export { ThemeForm };
