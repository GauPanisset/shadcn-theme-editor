import { Control, FieldValues, Path } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/technical/ui/form';
import { Input } from '@/technical/ui/input';

type Props<Values extends FieldValues, Name extends Path<Values>> = {
  control: Control<Values>;
  label: string;
  name: Name;
};

const ThemeFormNumberField = <
  Values extends FieldValues,
  Name extends Path<Values>,
>({
  control,
  label,
  name,
}: Props<Values, Name>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field: { onChange, ...otherFields } }) => (
        <FormItem className="group relative h-full flex-1 grow space-y-0 pt-2 transition-[width,flex] duration-300">
          <FormLabel className="absolute top-0 max-w-full truncate bg-background px-2 text-xs text-foreground">
            {label}
          </FormLabel>
          <FormControl>
            <div className="h-full">
              <Input
                className="h-full"
                type="number"
                step="0.1"
                min="0"
                onChange={(event) => {
                  const floatValue = parseFloat(event.target.value);
                  onChange(Number.isNaN(floatValue) ? 0 : floatValue);
                }}
                {...otherFields}
              />
              <div className="pointer-events-none absolute right-10 top-5 hidden items-center pl-3 group-hover:flex">
                <span className="text-base sm:text-sm">rem</span>
              </div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export { ThemeFormNumberField };
