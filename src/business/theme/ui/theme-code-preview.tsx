'use client';

import { Download } from 'lucide-react';
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

import { themeCodeWrapperId } from '../services/make-theme-code';
import { useTheme } from '../services/use-theme';
import { ThemeCodeCopyButton } from './theme-code-copy-button';

const ThemeCodePreview: React.FunctionComponent = () => {
  const { themes } = useTheme();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          className="rounded-full"
          variant="ghost"
          size="icon"
        >
          <Download />
        </Button>
      </DialogTrigger>
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
              &nbsp;&nbsp;&nbsp;&nbsp;--background: {themes.light['background']}
              ;
            </span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;--foreground: {themes.light['foreground']}
              ;
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
                  {themes.light[prefix as keyof typeof themes.light]};
                </span>
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}-foreground:{' '}
                  {
                    themes.light[
                      `${prefix}Foreground` as keyof typeof themes.light
                    ]
                  }
                  ;
                </span>
              </Fragment>
            ))}
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;--border: {themes.light['border']};
            </span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;--input: {themes.light['input']};
            </span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;--ring: {themes.light['ring']};</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;--radius: 1rem;</span>
            <span>&nbsp;&nbsp;&#125;</span>
            <span>&nbsp;&nbsp;.dark &#123;</span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;--background: {themes.dark['background']};
            </span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;--foreground: {themes.dark['foreground']};
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
                  {themes.dark[prefix as keyof typeof themes.dark]};
                </span>
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}-foreground:{' '}
                  {
                    themes.dark[
                      `${prefix}Foreground` as keyof typeof themes.dark
                    ]
                  }
                  ;
                </span>
              </Fragment>
            ))}
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;--border: {themes.dark['border']};
            </span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;--input: {themes.dark['input']};
            </span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;--ring: {themes.dark['ring']};</span>
            <span>&nbsp;&nbsp;&#125;</span>
            <span>&#125;</span>
          </code>
        </pre>
      </DialogContent>
    </Dialog>
  );
};

export { ThemeCodePreview };
