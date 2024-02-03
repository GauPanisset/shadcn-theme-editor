import { Info } from 'lucide-react';
import { Fragment } from 'react';

import { Alert, AlertDescription, AlertTitle } from '@/technical/ui/alert';

import { SectionWrapper } from './section-wrapper';

const alertVariants = ['default', 'destructive'] as const;

const Alerts = () => {
  return (
    <SectionWrapper title="Alerts">
      <div className="grid grid-cols-5 grid-rows-2 items-center justify-items-center gap-4 pt-2 text-center">
        {alertVariants.map((variant) => (
          <Fragment key={variant}>
            <p className="font-mono" key={variant}>
              {variant}
            </p>
            <Alert className="col-span-2 text-start" variant={variant}>
              <Info className="h-4 w-4" />
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>
                This is the Alert description.
              </AlertDescription>
            </Alert>
            <p className="col-span-2" />
          </Fragment>
        ))}
      </div>
    </SectionWrapper>
  );
};

export { Alerts };
