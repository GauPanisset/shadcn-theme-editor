'use client';

import { GeneratorForm } from '@/business/generator/ui/generator-form';

import { LinkLayout } from './link-layout';

const IndexPage = () => {
  return (
    <LinkLayout label="See full palette" href="/details">
      <GeneratorForm />
    </LinkLayout>
  );
};

export default IndexPage;
