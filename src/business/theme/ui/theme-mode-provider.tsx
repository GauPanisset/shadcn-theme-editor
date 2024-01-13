'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';

type Props = Omit<
  React.ComponentProps<typeof NextThemeProvider>,
  'attribute' | 'defaultTheme' | 'enableSystem'
>;

const ThemeModeProvider: React.FunctionComponent<Props> = (props) => {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      {...props}
    />
  );
};

export { ThemeModeProvider };
