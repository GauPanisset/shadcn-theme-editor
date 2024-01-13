'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { useHasMounted } from '@/technical/hooks/use-has-mounted';
import { Button } from '@/technical/ui/button';
import { Skeleton } from '@/technical/ui/skeleton';

const ThemeModeSwitch: React.FunctionComponent = () => {
  const { theme, setTheme } = useTheme();
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return <Skeleton className="h-10 w-10" />;
  }

  const handleSwitchTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleSwitchTheme}>
      {theme === 'dark' ? <Moon /> : <Sun />}
    </Button>
  );
};

export { ThemeModeSwitch };
