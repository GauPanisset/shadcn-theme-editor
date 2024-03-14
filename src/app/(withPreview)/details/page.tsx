'use client';

import { PaletteForm } from '@/business/palette/ui/palette-form';

import { LinkLayout } from '../link-layout';

const DetailsPage = () => {
  return (
    <LinkLayout label="Go to theme generator" href="/">
      <PaletteForm />
    </LinkLayout>
  );
};

export default DetailsPage;
