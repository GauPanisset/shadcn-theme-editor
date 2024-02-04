import Color from 'color';
import React from 'react';
import { Control, Path, useWatch } from 'react-hook-form';

import { PairContrastMessage } from '@/business/contrast/ui/pair-contrast-message';
import { translateColorFromHexToHsl } from '@/business/theme/services/translate-theme-colors';
import { useTheme } from '@/business/theme/services/use-theme';

import { PaletteFormData } from '../model/type';
import { PaletteFormField } from './palette-form-field';

type FieldItem<Values extends PaletteFormData, Name extends Path<Values>> = {
  label: React.ComponentProps<typeof PaletteFormField<Values, Name>>['label'];
  name: React.ComponentProps<typeof PaletteFormField<Values, Name>>['name'];
};

type Props<Values extends PaletteFormData, Name extends Path<Values>> = {
  control: Control<Values>;
  items: [FieldItem<Values, Name>, FieldItem<Values, Name>];
};
const PaletteFormDuoField = <
  Values extends PaletteFormData,
  Name extends Path<Values>,
>({
  control,
  items,
}: Props<Values, Name>) => {
  const { updateColors } = useTheme();
  const watchedBackgroundColor = useWatch({ name: items[0].name });
  const watchedForegroundColor = useWatch({ name: items[1].name });

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex h-full w-full rounded-xl border">
        {items.map((item) => (
          <PaletteFormField
            key={item.name}
            control={control}
            label={item.label}
            name={item.name}
            className="first:rounded-l-xl last:rounded-r-xl hover:grow-[2] "
          />
        ))}
      </div>
      <PairContrastMessage
        backgroundColor={Color(watchedBackgroundColor)}
        foregroundColor={Color(watchedForegroundColor)}
        onEnhanceContrast={(backgroundColor, foregroundColor) => {
          updateColors({
            [items[0].name.replace('colors.', '')]: translateColorFromHexToHsl(
              backgroundColor.hex()
            ),
            [items[1].name.replace('colors.', '')]: translateColorFromHexToHsl(
              foregroundColor.hex()
            ),
          });
        }}
      />
    </div>
  );
};

export { PaletteFormDuoField };
