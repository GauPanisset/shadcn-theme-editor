'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/technical/ui/button';

type Props = {
  children: React.ReactNode;
  label: string;
  href: string;
};

const LinkLayout: React.FunctionComponent<Props> = ({
  children,
  label,
  href,
}) => {
  return (
    <div className="flex h-full flex-col items-end justify-between">
      <div className="min-h-0 w-full grow">{children} </div>
      <Button className="mr-6 mt-4 shrink-0" variant="link">
        <Link href={href}>{label}</Link>
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export { LinkLayout };
