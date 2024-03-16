import { CheckIcon, CopyIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/technical/ui/button';

import { makeThemeCode } from '../services/make-theme-code';

type Props = {
  previewType: string;
};

const ThemeCodeCopyButton: React.FunctionComponent<Props> = ({
  previewType,
}) => {
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
      onClick={() => {
        void navigator.clipboard.writeText(makeThemeCode(previewType) ?? '');
        setHasCopied(true);
      }}
      variant="secondary"
      className="w-24"
      keyboardShortcut={['cmd', 'C']}
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
