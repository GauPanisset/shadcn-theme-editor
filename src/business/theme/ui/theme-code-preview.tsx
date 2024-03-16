'use client';

import { ArrowUpRightFromSquare, Copy } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/technical/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/technical/ui/dialog';
import { KeyboardKey } from '@/technical/ui/keyboard-key';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/technical/ui/select';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/technical/ui/tooltip';

import { themeCodeWrapperId } from '../services/make-theme-code';
import { useThemeContext } from '../services/theme-context';
import { ThemeCodeCopyButton } from './theme-code-copy-button';
import { ThemeCodeCssPreview } from './theme-code-css-preview';
import { ThemeCodeJsonPreview } from './theme-code-json-preview';

const ThemeCodePreview: React.FunctionComponent = () => {
  const [previewType, setPreviewType] = useState('css');
  const { theme } = useThemeContext();

  return (
    <Dialog>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <Button
                type="button"
                className="rounded-full"
                variant="ghost"
                size="icon"
                keyboardShortcut={['cmd', 'E']}
              >
                <Copy />
              </Button>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Export theme</p>
            <div className="text-muted-foreground">
              <KeyboardKey>Cmd</KeyboardKey> + <KeyboardKey>E</KeyboardKey>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DialogContent className="max-w-2xl outline-none">
        <DialogHeader className="font-mono">
          <DialogTitle>Theme</DialogTitle>
          <DialogDescription className="h-10">
            {previewType === 'css'
              ? 'Copy and paste the following code into your CSS file.'
              : null}
            {previewType === 'json' ? (
              <>
                <span>
                  Copy and paste the following code into the Figma plugin{' '}
                </span>
                <Button
                  variant="link"
                  className="inline whitespace-normal p-0"
                  asChild
                >
                  <a
                    href="https://www.figma.com/community/plugin/1143682832255826428/color-import-export"
                    target="_blank"
                  >
                    Color Import/Export
                    <ArrowUpRightFromSquare className="ml-1 inline h-4 w-4" />
                  </a>
                </Button>
                <span> to import the theme.</span>
              </>
            ) : null}
          </DialogDescription>
        </DialogHeader>
        <pre className="relative max-h-[450px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900">
          <div className="absolute right-4 top-4 z-10 flex space-x-4">
            <Select value={previewType} onValueChange={setPreviewType}>
              <SelectTrigger className="w-24">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="css">CSS</SelectItem>
                <SelectItem value="json">JSON</SelectItem>
              </SelectContent>
            </Select>
            <ThemeCodeCopyButton previewType={previewType} />
          </div>

          <code
            id={themeCodeWrapperId}
            className="relative flex flex-col rounded px-4 font-mono text-sm text-white"
          >
            {previewType === 'css' ? (
              <ThemeCodeCssPreview theme={theme} />
            ) : null}
            {previewType === 'json' ? (
              <ThemeCodeJsonPreview theme={theme} />
            ) : null}
          </code>
        </pre>
      </DialogContent>
    </Dialog>
  );
};

export { ThemeCodePreview };
