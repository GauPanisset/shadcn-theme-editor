'use client';

import { CardsDemo } from '@/business/demo/ui';
import { ThemeForm } from '@/business/theme/ui/theme-form';
import { useHasMounted } from '@/technical/hooks/use-has-mounted';
import { Card } from '@/technical/ui/card';

const HomePage = () => {
  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

  return (
    <div className="flex h-full">
      <div className="flex h-full w-96 flex-col border-r">
        <ThemeForm />
      </div>
      <div id="demo-wrapper" className="h-full flex-1 overflow-auto p-4">
        <Card className="rounded-xl bg-background p-4">
          <CardsDemo />
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
