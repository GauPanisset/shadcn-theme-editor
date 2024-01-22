import { Undo2 } from 'lucide-react';

import { Button } from '@/technical/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/technical/ui/tooltip';

import { useTheme } from '../services/use-theme';

const ThemeResetButton: React.FunctionComponent = () => {
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

export { ThemeResetButton };
