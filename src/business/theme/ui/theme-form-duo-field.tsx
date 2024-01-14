import React from 'react';
import { Control, FieldValues, Path } from 'react-hook-form';

import { ThemeFormField } from './theme-form-field';

type FieldItem<Values extends FieldValues, Name extends Path<Values>> = {
  label: React.ComponentProps<typeof ThemeFormField<Values, Name>>['label'];
  name: React.ComponentProps<typeof ThemeFormField<Values, Name>>['name'];
};

type Props<Values extends FieldValues, Name extends Path<Values>> = {
  control: Control<Values>;
  items: [FieldItem<Values, Name>, FieldItem<Values, Name>];
};

const ThemeFormDuoField = <
  Values extends FieldValues,
  Name extends Path<Values>,
>({
  control,
  items,
}: Props<Values, Name>) => {
  return (
    <div className="flex h-full w-full overflow-hidden rounded-xl border">
      {items.map((item) => (
        <ThemeFormField
          key={item.name}
          control={control}
          label={item.label}
          name={item.name}
          className="hover:grow-[2]"
        />
      ))}
    </div>
  );
};

export { ThemeFormDuoField };
