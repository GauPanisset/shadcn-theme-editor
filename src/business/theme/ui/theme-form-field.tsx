import { cva } from 'class-variance-authority';
import color from 'color';
import { Control, FieldValues, Path } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/technical/ui/form';
import { cn } from '@/technical/ui/helpers';
import { Input } from '@/technical/ui/input';

type Props<Values extends FieldValues, Name extends Path<Values>> = {
  control: Control<Values>;
  label: string;
  name: Name;
  title?: string;
};

const textColorVariants = cva('', {
  variants: {
    color: {
      light: 'text-slate-900',
      dark: 'text-slate-50',
    },
  },
  defaultVariants: {
    color: 'light',
  },
});

const ThemeFormField = <Values extends FieldValues, Name extends Path<Values>>({
  control,
  label,
  name,
  title,
}: Props<Values, Name>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field: { value, ...otherField } }) => {
        const currentColor = color(value);

        return (
          <FormItem className="relative h-full w-full overflow-hidden">
            {title ? (
              <h6
                className={cn(
                  'pointer-events-none absolute left-0 top-0 z-10 p-2 text-xl font-semibold tracking-tight text-foreground',
                  textColorVariants({
                    color: currentColor.isDark() ? 'dark' : 'light',
                  })
                )}
              >
                {title}
              </h6>
            ) : null}
            <FormControl>
              <Input
                type="color"
                {...otherField}
                value={currentColor.hex()}
                className="relative -left-1/2 -top-1/2 h-[200%] w-[200%] cursor-pointer border-none p-0"
              />
            </FormControl>
            <FormLabel
              className={cn(
                'pointer-events-none absolute bottom-0 left-0 p-2 text-foreground',
                textColorVariants({
                  color: currentColor.isDark() ? 'dark' : 'light',
                })
              )}
            >
              {label}
            </FormLabel>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export { ThemeFormField };
