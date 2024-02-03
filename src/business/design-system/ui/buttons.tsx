import { Power } from 'lucide-react';
import { Fragment } from 'react';

import { Button } from '@/technical/ui/button';
import { Separator } from '@/technical/ui/separator';

import { SectionWrapper } from './section-wrapper';

const buttonVariantKeys = [
  'default',
  'destructive',
  'outline',
  'secondary',
  'ghost',
  'link',
] as const;

const buttonSizeKeys = ['default', 'sm', 'lg', 'icon'] as const;

const Buttons = () => {
  return (
    <SectionWrapper title="Buttons">
      <div className="grid grid-cols-5 grid-rows-7 items-center justify-items-center gap-4 text-center">
        <p> </p>
        {buttonSizeKeys.map((size) => (
          <p className="font-mono" key={size}>
            {size}
          </p>
        ))}
        {buttonVariantKeys.map((variant) => (
          <Fragment key={variant}>
            <p className="font-mono">{variant}</p>
            {buttonSizeKeys.map((size) => (
              <Button size={size} variant={variant} key={`${size}-${variant}`}>
                {size === 'icon' ? <Power /> : 'Button'}
              </Button>
            ))}
          </Fragment>
        ))}
      </div>
    </SectionWrapper>
  );
};

export { Buttons };
