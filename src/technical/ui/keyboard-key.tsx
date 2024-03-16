import { cn } from './helpers';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const KeyboardKey: React.FunctionComponent<Props> = ({
  children,
  className,
}) => {
  return (
    <span
      className={cn(
        'rounded border border-b-2 border-muted-foreground px-1 font-mono text-xs text-muted-foreground',
        className
      )}
    >
      {children}
    </span>
  );
};

export { KeyboardKey };
