import { CheckIcon, CopyIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/technical/ui/button';

import { makeThemeCode } from '../services/make-theme-code';

const ThemeCodeCopyButton = () => {
  const [hasCopied, setHasCopied] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHasCopied(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [hasCopied]);

  return (
    <Button
      size="sm"
      onClick={() => {
        void navigator.clipboard.writeText(makeThemeCode() ?? '');
        setHasCopied(true);
      }}
      className="absolute right-4 top-4 z-10"
      variant="secondary"
    >
      {hasCopied ? (
        <CheckIcon className="mr-2 h-4 w-4" />
      ) : (
        <CopyIcon className="mr-2 h-4 w-4" />
      )}
      Copy
    </Button>
  );
};

export { ThemeCodeCopyButton };
