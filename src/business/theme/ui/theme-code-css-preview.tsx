import React, { Fragment } from 'react';

import { Theme } from '../model/type';

type Props = {
  theme: Theme;
};

const ThemeCodeCssPreview: React.FunctionComponent<Props> = ({ theme }) => {
  return (
    <>
      <span>@layer base &#123;</span>
      <span>&nbsp;&nbsp;:root &#123;</span>
      <span>
        &nbsp;&nbsp;&nbsp;&nbsp;--background: {theme.light['background']};
      </span>
      <span>
        &nbsp;&nbsp;&nbsp;&nbsp;--foreground: {theme.light['foreground']};
      </span>
      {[
        'card',
        'popover',
        'primary',
        'secondary',
        'muted',
        'accent',
        'destructive',
      ].map((prefix) => (
        <Fragment key={prefix}>
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}:{' '}
            {theme.light[prefix as keyof typeof theme.light]};
          </span>
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}-foreground:{' '}
            {theme.light[`${prefix}Foreground` as keyof typeof theme.light]};
          </span>
        </Fragment>
      ))}
      <span>&nbsp;&nbsp;&nbsp;&nbsp;--border: {theme.light['border']};</span>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;--input: {theme.light['input']};</span>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;--ring: {theme.light['ring']};</span>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;--radius: {theme.borderRadius}rem;</span>
      <span>&nbsp;&nbsp;&#125;</span>
      <span>&nbsp;&nbsp;.dark &#123;</span>
      <span>
        &nbsp;&nbsp;&nbsp;&nbsp;--background: {theme.dark['background']};
      </span>
      <span>
        &nbsp;&nbsp;&nbsp;&nbsp;--foreground: {theme.dark['foreground']};
      </span>
      {[
        'card',
        'popover',
        'primary',
        'secondary',
        'muted',
        'accent',
        'destructive',
      ].map((prefix) => (
        <Fragment key={prefix}>
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}:{' '}
            {theme.dark[prefix as keyof typeof theme.dark]};
          </span>
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}-foreground:{' '}
            {theme.dark[`${prefix}Foreground` as keyof typeof theme.dark]};
          </span>
        </Fragment>
      ))}
      <span>&nbsp;&nbsp;&nbsp;&nbsp;--border: {theme.dark['border']};</span>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;--input: {theme.dark['input']};</span>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;--ring: {theme.dark['ring']};</span>
      <span>&nbsp;&nbsp;&#125;</span>
      <span>&#125;</span>
    </>
  );
};

export { ThemeCodeCssPreview };
