'use client';

import { CardsDemo } from '@/business/demo/ui';
import { DesignSystem } from '@/business/design-system/ui';
import { ThemeProvider } from '@/business/theme/services/theme-context';
import { useHasMounted } from '@/technical/hooks/use-has-mounted';
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/technical/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/technical/ui/tabs';

type Props = {
  children: React.ReactNode;
};

const LayoutWithPreview: React.FunctionComponent<Props> = ({ children }) => {
  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

  return (
    <ThemeProvider>
      <div className="flex h-full">
        <div className="flex h-full w-96 shrink-0 flex-col border-r font-mono">
          <CardHeader className="pb-2">
            <CardTitle>Palette</CardTitle>
            <CardDescription>
              Choose the colors to build your theme
            </CardDescription>
          </CardHeader>
          <CardContent className="min-h-0 flex-1 p-0 pb-5">
            {children}
          </CardContent>
        </div>
        <Tabs defaultValue="demo" className="flex-1">
          <div className="flex h-full min-h-0 flex-1 flex-col">
            <CardHeader className="pb-3 font-mono">
              <CardTitle>Preview</CardTitle>
              <CardDescription>Check how your theme feels</CardDescription>
              <TabsList className="!mt-4 grid w-full grid-cols-2">
                <TabsTrigger value="demo">Examples</TabsTrigger>
                <TabsTrigger value="design-system">Components</TabsTrigger>
              </TabsList>
            </CardHeader>
            <div
              id="demo-wrapper"
              className="h-full min-h-0 flex-1 bg-background text-foreground"
            >
              <TabsContent
                value="demo"
                className="h-full overflow-auto px-6 pb-8 pt-3"
              >
                <CardsDemo />
              </TabsContent>
              <TabsContent
                value="design-system"
                className="h-full overflow-auto px-6 pb-8 pt-3"
              >
                <DesignSystem />
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </ThemeProvider>
  );
};

export default LayoutWithPreview;
