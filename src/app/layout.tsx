import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ThemeModeProvider } from '@/business/theme/ui/theme-mode-provider';
import { cn } from '@/technical/ui/helpers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'shadcn theme editor',
  description:
    'Generate and edit shadcn themes ready to be used in your projects.',
};

type Props = {
  children: React.ReactNode;
};

const RootLayout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning={true} className="overflow-hidden">
      <body className={cn('flex h-screen flex-col', inter.className)}>
        <ThemeModeProvider>
          <header className="z-10 border-b p-4 px-6">
            <h1 className="font-mono text-3xl font-bold">
              shadcn theme editor
            </h1>
          </header>
          <main className="flex min-h-0 w-full flex-1 flex-col overflow-hidden">
            {children}
          </main>
        </ThemeModeProvider>
        <Analytics />
      </body>
    </html>
  );
};
export default RootLayout;
