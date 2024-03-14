import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { DefaultValues, FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';

import { debounce } from '@/technical/helpers/debounce';

import { Theme } from '../model/type';
import { useThemeContext } from './theme-context';

type UseThemeFormProps<FormData extends FieldValues> = {
  defaultValues: DefaultValues<FormData>;
  formSchema: z.ZodSchema;
  translateFormDataToTheme: (values: FormData) => Partial<Theme>;
};

const useThemeForm = <FormData extends FieldValues>({
  defaultValues,
  formSchema,
  translateFormDataToTheme,
}: UseThemeFormProps<FormData>) => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const { updateTheme } = useThemeContext();

  const onBlur = (values: FormData) => {
    updateTheme(translateFormDataToTheme(values));
  };

  /**
   * To prevent theme history flooding, we only push the theme on blur not on change.
   */
  const onChange = (values: FormData) => {
    updateTheme(translateFormDataToTheme(values), {
      shouldUpdateHistory: false,
    });
  };

  useEffect(() => {
    form.reset(defaultValues);
  }, [defaultValues, form]);

  return {
    form,
    handleBlur: form.handleSubmit(onBlur),
    handleChange: debounce(form.handleSubmit(onChange), 300),
  };
};

export { useThemeForm };
