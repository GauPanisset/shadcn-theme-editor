import { Redo, Undo } from 'lucide-react';

import { useThemeContext } from '@/business/theme/services/theme-context';
import { Button } from '@/technical/ui/button';
import { KeyboardKey } from '@/technical/ui/keyboard-key';
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
              keyboardShortcut={['cmd', 'Z']}
            >
              <Undo />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Undo</p>
            <div className="text-muted-foreground">
              <KeyboardKey>Cmd</KeyboardKey> + <KeyboardKey>Z</KeyboardKey>
            </div>
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
              keyboardShortcut={['cmd', 'shift', 'Z']}
            >
              <Redo />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Redo</p>
            <div className="text-muted-foreground">
              <KeyboardKey>Cmd</KeyboardKey> + <KeyboardKey>Alt</KeyboardKey> +{' '}
              <KeyboardKey>Z</KeyboardKey>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export { HistoryButtons };
