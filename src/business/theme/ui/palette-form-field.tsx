import { cva } from 'class-variance-authority';
import Color from 'color';
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
  className?: React.ComponentProps<typeof FormItem>['className'];
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

const PaletteFormField = <
  Values extends FieldValues,
  Name extends Path<Values>,
>({
  control,
  label,
  name,
  className,
}: Props<Values, Name>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field: { value, ...otherField } }) => {
        const currentColor = Color(value);
        const currentTextColorVariant = currentColor.isDark()
          ? 'dark'
          : 'light';

        return (
          <FormItem
            className={cn(
              'group relative h-full min-h-12 grow overflow-hidden ring-ring ring-offset-2 ring-offset-background transition-[width,flex] duration-300 focus-within:z-10 focus-within:ring-2',
              className
            )}
          >
            <div
              className={cn(
                'pointer-events-none absolute inset-0 z-10 flex items-center justify-end p-4 text-sm font-bold text-foreground opacity-0 transition-opacity group-hover:opacity-100',
                textColorVariants({
                  color: currentTextColorVariant,
                })
              )}
            >
              {currentColor.hex()}
            </div>
            <FormControl>
              <Input
                type="color"
                {...otherField}
                value={currentColor.hex()}
                className="absolute -left-1/2 -top-1/2 z-0 h-[200%] w-[200%] cursor-pointer border-none p-0"
              />
            </FormControl>
            <FormLabel
              className={cn(
                'pointer-events-none absolute bottom-0 left-1 w-full truncate p-1 text-xs text-foreground',
                textColorVariants({
                  color: currentTextColorVariant,
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

export { PaletteFormField };
