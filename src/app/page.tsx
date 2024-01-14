'use client';

import { CardsDemo } from '@/business/demo/ui';
import { ThemeForm } from '@/business/theme/ui/theme-form';
import { useHasMounted } from '@/technical/hooks/use-has-mounted';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/technical/ui/card';

const HomePage = () => {
  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

  return (
    <div className="flex h-full">
      <div className="flex h-full w-96 flex-col border-r font-mono">
        <CardHeader>
          <CardTitle>Palette</CardTitle>
          <CardDescription>
            Choose the colors to build your theme
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <ThemeForm />
        </CardContent>
      </div>
      <div id="demo-wrapper" className="h-full flex-1 overflow-auto p-4">
        <Card className="rounded-xl bg-background">
          <CardHeader className="font-mono">
            <CardTitle>Preview</CardTitle>
            <CardDescription>Check how your theme feels</CardDescription>
          </CardHeader>
          <CardContent>
            <CardsDemo />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
