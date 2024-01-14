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

const ThemeFormField = <Values extends FieldValues, Name extends Path<Values>>({
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
        const currentColor = color(value);
        const currentTextColorVariant = currentColor.isDark()
          ? 'dark'
          : 'light';

        return (
          <FormItem
            className={cn(
              'group relative h-full grow overflow-hidden transition-[width,flex] duration-300',
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
                'pointer-events-none absolute bottom-0 left-0 w-full truncate p-1 text-xs text-foreground',
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

export { ThemeFormField };
