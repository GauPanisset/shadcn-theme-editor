import { CloudIcon, MoonIcon, RainbowIcon, SunIcon } from 'lucide-react';
import { Control, FieldValues, Path } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/technical/ui/form';
import { Slider } from '@/technical/ui/slider';

type Props<Values extends FieldValues, Name extends Path<Values>> = {
  control: Control<Values>;
  label: string;
  name: Name;
  referenceOffset?: number;
  variant: 'lightness' | 'saturation';
};

const GeneratorSliderField = <
  Values extends FieldValues,
  Name extends Path<Values>,
>({
  control,
  label,
  name,
  referenceOffset,
  variant,
}: Props<Values, Name>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field: { value, onChange, ...otherField } }) => (
        <FormItem>
          <FormLabel className="sr-only">{label}</FormLabel>
          <FormControl>
            <div className="flex space-x-4">
              {variant === 'lightness' ? <MoonIcon /> : <CloudIcon />}
              <div className="grow pt-2">
                <Slider
                  min={0}
                  max={variant === 'lightness' ? 50 : 100}
                  step={1}
                  value={[value]}
                  onValueChange={(newValue) => onChange(newValue[0])}
                  {...otherField}
                />
                {referenceOffset !== undefined ? (
                  <div className="mt-2 h-fit w-full px-[10px]">
                    <span
                      className="relative block h-2 w-2 -translate-x-1/2 rounded-full bg-foreground/30"
                      style={{
                        left: `${referenceOffset}%`,
                      }}
                    />
                  </div>
                ) : null}
              </div>
              {variant === 'lightness' ? <SunIcon /> : <RainbowIcon />}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export { GeneratorSliderField };
