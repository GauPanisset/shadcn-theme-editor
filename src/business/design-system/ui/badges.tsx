import { Fragment } from 'react';

import { Badge } from '@/technical/ui/badge';

import { SectionWrapper } from './section-wrapper';

const badgeVariantKeys = [
  'default',
  'secondary',
  'destructive',
  'outline',
] as const;

const Badges = () => {
  return (
    <SectionWrapper title="Badges">
      <div className="grid grid-cols-5 grid-rows-4 items-center justify-items-center gap-4 pt-2 text-center">
        {badgeVariantKeys.map((variant) => (
          <Fragment key={variant}>
            <p className="font-mono" key={variant}>
              {variant}
            </p>
            <Badge variant={variant}>Badge</Badge>
            <p className="col-span-3" />
          </Fragment>
        ))}
      </div>
    </SectionWrapper>
  );
};

export { Badges };
