import React from 'react';
import { Control, FieldValues, Path } from 'react-hook-form';

import { PaletteFormField } from './palette-form-field';

type FieldItem<Values extends FieldValues, Name extends Path<Values>> = {
  label: React.ComponentProps<typeof PaletteFormField<Values, Name>>['label'];
  name: React.ComponentProps<typeof PaletteFormField<Values, Name>>['name'];
};

type Props<Values extends FieldValues, Name extends Path<Values>> = {
  control: Control<Values>;
  items: [FieldItem<Values, Name>, FieldItem<Values, Name>];
};

const PaletteFormDuoField = <
  Values extends FieldValues,
  Name extends Path<Values>,
>({
  control,
  items,
}: Props<Values, Name>) => {
  return (
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
  );
};

export { PaletteFormDuoField };
