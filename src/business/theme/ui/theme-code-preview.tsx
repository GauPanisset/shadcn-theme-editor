'use client';

import { Copy } from 'lucide-react';
import { Fragment } from 'react';

import { Button } from '@/technical/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/technical/ui/dialog';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/technical/ui/tooltip';

import { themeCodeWrapperId } from '../services/make-theme-code';
import { useTheme } from '../services/use-theme';
import { ThemeCodeCopyButton } from './theme-code-copy-button';

const ThemeCodePreview: React.FunctionComponent = () => {
  const { theme } = useTheme();

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
              >
                <Copy />
              </Button>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Copy code</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DialogContent className="max-w-2xl outline-none">
        <DialogHeader className="font-mono">
          <DialogTitle>Theme</DialogTitle>
          <DialogDescription>
            Copy and paste the following code into your CSS file.
          </DialogDescription>
        </DialogHeader>
        <pre className="relative max-h-[450px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900">
          <ThemeCodeCopyButton />
          <code
            id={themeCodeWrapperId}
            className="relative flex flex-col rounded px-4 font-mono text-sm text-white"
          >
            <span>@layer base &#123;</span>
            <span>&nbsp;&nbsp;:root &#123;</span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;--background: {theme.light['background']};
            </span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;--foreground: {theme.light['foreground']};
            </span>
            {[
              'card',
              'popover',
              'primary',
              'secondary',
              'muted',
              'accent',
              'destructive',
            ].map((prefix) => (
              <Fragment key={prefix}>
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}:{' '}
                  {theme.light[prefix as keyof typeof theme.light]};
                </span>
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}-foreground:{' '}
                  {
                    theme.light[
                      `${prefix}Foreground` as keyof typeof theme.light
                    ]
                  }
                  ;
                </span>
              </Fragment>
            ))}
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;--border: {theme.light['border']};
            </span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;--input: {theme.light['input']};
            </span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;--ring: {theme.light['ring']};</span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;--radius: {theme.borderRadius}rem;
            </span>
            <span>&nbsp;&nbsp;&#125;</span>
            <span>&nbsp;&nbsp;.dark &#123;</span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;--background: {theme.dark['background']};
            </span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;--foreground: {theme.dark['foreground']};
            </span>
            {[
              'card',
              'popover',
              'primary',
              'secondary',
              'muted',
              'accent',
              'destructive',
            ].map((prefix) => (
              <Fragment key={prefix}>
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}:{' '}
                  {theme.dark[prefix as keyof typeof theme.dark]};
                </span>
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}-foreground:{' '}
                  {theme.dark[`${prefix}Foreground` as keyof typeof theme.dark]}
                  ;
                </span>
              </Fragment>
            ))}
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;--border: {theme.dark['border']};
            </span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;--input: {theme.dark['input']};</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;--ring: {theme.dark['ring']};</span>
            <span>&nbsp;&nbsp;&#125;</span>
            <span>&#125;</span>
          </code>
        </pre>
      </DialogContent>
    </Dialog>
  );
};

export { ThemeCodePreview };
