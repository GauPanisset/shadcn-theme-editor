import { Redo, Undo } from 'lucide-react';

import { useThemeContext } from '@/business/theme/services/theme-context';
import { Button } from '@/technical/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/technical/ui/tooltip';

const HistoryButtons = () => {
  const { canRedo, canUndo, redoThemeHistory, undoThemeHistory } =
    useThemeContext();
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              type="button"
              className="rounded-full"
              variant="ghost"
              size="icon"
              disabled={!canUndo}
              onClick={undoThemeHistory}
            >
              <Undo />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Undo</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              type="button"
              className="rounded-full"
              variant="ghost"
              size="icon"
              disabled={!canRedo}
              onClick={redoThemeHistory}
            >
              <Redo />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Redo</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export { HistoryButtons };
