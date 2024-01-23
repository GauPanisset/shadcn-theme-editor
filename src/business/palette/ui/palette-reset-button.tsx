import { Undo2 } from 'lucide-react';

import { useTheme } from '@/business/theme/services/use-theme';
import { Button } from '@/technical/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/technical/ui/tooltip';

const PaletteResetButton: React.FunctionComponent = () => {
  const { resetTheme } = useTheme();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            type="button"
            className="rounded-full"
            variant="ghost"
            size="icon"
            onClick={resetTheme}
          >
            <Undo2 />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Reset theme</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export { PaletteResetButton };
