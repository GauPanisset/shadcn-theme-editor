import Color from 'color';
import { Palette } from 'lucide-react';

import { generateTheme } from '@/business/generator/services/generate-theme';
import { makeGeneratorFormDataFromTheme } from '@/business/generator/services/make-generator-form-data-from-theme';
import { useThemeContext } from '@/business/theme/services/theme-context';
import { Button } from '@/technical/ui/button';
import { cn } from '@/technical/ui/helpers';
import { KeyboardKey } from '@/technical/ui/keyboard-key';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/technical/ui/popover';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/technical/ui/tooltip';

import { presets } from '../shadcn-theme-presets';

const PresetMenu: React.FunctionComponent = () => {
  const { themeMode, updateTheme } = useThemeContext();

  return (
    <Popover>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                className="rounded-full"
                size="icon"
                keyboardShortcut={['cmd', 'O']}
              >
                <Palette />
              </Button>
            </PopoverTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Pick a preset</p>
            <div className="text-muted-foreground">
              <KeyboardKey>Cmd</KeyboardKey> + <KeyboardKey>O</KeyboardKey>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <PopoverContent className="mx-6 w-[21rem] space-y-4">
        <div className="space-y-1">
          <div className="font-semibold leading-none tracking-tight">
            Theme presets
          </div>
          <div className="text-xs text-muted-foreground">
            Pick a preset as theme base.
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {presets.map((preset) => {
            const generatorFormData = makeGeneratorFormDataFromTheme(
              preset.theme,
              themeMode
            );

            return (
              <Button
                key={preset.name}
                variant="outline"
                className="justify-center p-2"
                style={
                  {
                    '--theme-primary': generatorFormData.primary,
                    '--theme-secondary': generatorFormData.secondary,
                    '--theme-background': generatorFormData.background,
                  } as React.CSSProperties
                }
                onClick={() => {
                  const darkGeneratorFormData = makeGeneratorFormDataFromTheme(
                    preset.theme,
                    'dark'
                  );
                  const lightGeneratorFormData = makeGeneratorFormDataFromTheme(
                    preset.theme,
                    'light'
                  );

                  updateTheme({
                    dark: generateTheme({
                      ...darkGeneratorFormData,
                      primary: Color(darkGeneratorFormData.primary),
                      secondary: Color(darkGeneratorFormData.secondary),
                      background: Color(darkGeneratorFormData.background),
                      themeMode: 'dark',
                    }),
                    light: generateTheme({
                      ...lightGeneratorFormData,
                      primary: Color(lightGeneratorFormData.primary),
                      secondary: Color(lightGeneratorFormData.secondary),
                      background: Color(lightGeneratorFormData.background),
                      themeMode: 'light',
                    }),
                  });
                }}
              >
                <span
                  className={cn(
                    'mr-1 h-5 w-5 rounded-full border bg-[var(--theme-primary)]'
                  )}
                />
                <span
                  className={cn(
                    'mr-1 h-5 w-5 rounded-full border bg-[var(--theme-secondary)]'
                  )}
                />
                <span
                  className={cn(
                    'mr-1 h-5 w-5 rounded-full border bg-[var(--theme-background)]'
                  )}
                />
              </Button>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export { PresetMenu };
