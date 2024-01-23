import { Palette } from 'lucide-react';

import { useTheme } from '@/business/theme/services/use-theme';
import { Button } from '@/technical/ui/button';
import { cn } from '@/technical/ui/helpers';
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
  const { themeMode, updateTheme } = useTheme();

  return (
    <Popover>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <PopoverTrigger asChild>
              <Button variant="ghost" className="rounded-full" size="icon">
                <Palette />
              </Button>
            </PopoverTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Pick a preset</p>
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
          {presets.map((preset) => (
            <Button
              key={preset.name}
              variant="outline"
              className="justify-start"
              style={
                {
                  '--theme-primary': `hsl(${preset?.activeColor[themeMode]})`,
                } as React.CSSProperties
              }
              onClick={() => updateTheme(preset.theme)}
            >
              <span
                className={cn(
                  'mr-1 flex h-4 w-4 shrink-0 -translate-x-1 rounded-full bg-[var(--theme-primary)]'
                )}
              />
              {preset.label}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export { PresetMenu };
