import Color from 'color';
import { useMemo } from 'react';

import { useThemeContext } from '@/business/theme/services/theme-context';
import { useThemeForm } from '@/business/theme/services/use-theme-form';
import { FormActionsBar } from '@/business/theme/ui/form-actions-bar';
import { PaletteFormField } from '@/business/theme/ui/palette-form-field';
import { Form } from '@/technical/ui/form';

import { generatorFormSchema } from '../model/schema';
import { GeneratorFormData } from '../model/type';
import { generateTheme } from '../services/generate-theme';
import { makeGeneratorFormDataFromTheme } from '../services/make-generator-form-data-from-theme';
import { GeneratorSliderField } from './generator-slider-field';
import { RandomThemeButton } from './random-theme-button';

const GeneratorForm = () => {
  const { theme, themeMode } = useThemeContext();

  const defaultValues = useMemo(
    () => makeGeneratorFormDataFromTheme(theme, themeMode),
    [theme, themeMode]
  );

  const { form, handleBlur, handleChange } = useThemeForm<GeneratorFormData>({
    defaultValues,
    formSchema: generatorFormSchema,
    translateFormDataToTheme: ({
      borderLightness,
      borderSaturation,
      cardLightness,
      cardSaturation,
      primary,
      secondary,
      background,
    }: GeneratorFormData) => {
      const theme = generateTheme({
        borderLightness,
        borderSaturation,
        cardLightness,
        cardSaturation,
        primary: Color(primary),
        secondary: Color(secondary),
        background: Color(background),
        themeMode,
      });

      return {
        [themeMode]: theme,
      };
    },
  });

  const watchedBackgroundColor = form.watch('background');

  return (
    <Form {...form}>
      <div className="flex h-full flex-col space-y-1">
        <FormActionsBar />
        <form
          onChange={handleChange}
          onBlur={handleBlur}
          onSubmit={(event) => {
            event.preventDefault();
          }}
          className="space-y-6 px-6"
        >
          <div className="space-y-2">
            <p className="text-sm">Borders</p>
            <GeneratorSliderField
              control={form.control}
              name="borderLightness"
              label="Border lightness"
              referenceOffset={
                (Math.round(Color(watchedBackgroundColor).lightness()) -
                  (themeMode === 'dark' ? 0 : 50)) *
                2
              }
              variant="lightness"
            />
            <GeneratorSliderField
              control={form.control}
              name="borderSaturation"
              label="Border saturation"
              variant="saturation"
            />
          </div>
          <div className="space-y-2">
            <p className="text-sm">Cards</p>
            <GeneratorSliderField
              control={form.control}
              name="cardLightness"
              label="Card lightness"
              referenceOffset={
                (Math.round(Color(watchedBackgroundColor).lightness()) -
                  (themeMode === 'dark' ? 0 : 50)) *
                2
              }
              variant="lightness"
            />
            <GeneratorSliderField
              control={form.control}
              name="cardSaturation"
              label="Card saturation"
              variant="saturation"
            />
          </div>
          <div className="space-y-2">
            <p className="text-sm">Colors</p>
            <PaletteFormField
              control={form.control}
              name="primary"
              label="Primary"
              className="h-16 rounded-xl border"
            />
            <PaletteFormField
              control={form.control}
              name="secondary"
              label="Secondary"
              className="h-16 rounded-xl border"
            />
            <PaletteFormField
              control={form.control}
              name="background"
              label="Background"
              className="h-16 rounded-xl border"
            />
          </div>
        </form>
        <div className="flex grow items-center justify-center px-6">
          <RandomThemeButton />
        </div>
      </div>
    </Form>
  );
};

export { GeneratorForm };
