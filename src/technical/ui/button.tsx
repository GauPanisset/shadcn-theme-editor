import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/technical/ui/helpers';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  keyboardShortcut?: (KeyboardEvent['code'] | 'cmd' | 'alt' | 'shift')[];
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, keyboardShortcut, ...props },
    ref
  ) => {
    const innerRef = React.useRef<HTMLButtonElement>(null);
    React.useImperativeHandle(ref, () => innerRef.current!, []);

    const Comp = asChild ? Slot : 'button';

    const onClick = props.onClick;

    const keyboardHandler = React.useCallback(
      (event: KeyboardEvent) => {
        if (!keyboardShortcut?.length || !onClick || !innerRef.current) return;

        const { code, key, ctrlKey, metaKey, altKey, shiftKey } = event;

        const lowerCaseNoModifierKeyboardShortcut = keyboardShortcut
          ?.filter((bind) => !['ctrl', 'cmd', 'shift', 'alt'].includes(bind))
          .map((bind) => bind.toLowerCase());

        if (
          !lowerCaseNoModifierKeyboardShortcut.includes(code.toLowerCase()) &&
          !lowerCaseNoModifierKeyboardShortcut.includes(key.toLowerCase())
        )
          return;
        if (keyboardShortcut?.includes('cmd') && !metaKey) return;
        if (!keyboardShortcut?.includes('cmd') && metaKey) return;

        if (keyboardShortcut?.includes('ctrl') && !ctrlKey) return;
        if (!keyboardShortcut?.includes('ctrl') && ctrlKey) return;

        if (keyboardShortcut?.includes('shift') && !shiftKey) return;
        if (!keyboardShortcut?.includes('shift') && shiftKey) return;

        if (keyboardShortcut?.includes('alt') && !altKey) return;
        if (!keyboardShortcut?.includes('alt') && altKey) return;

        innerRef.current.click();
        event.preventDefault();
      },
      [keyboardShortcut, innerRef, onClick]
    );

    React.useEffect(() => {
      window.addEventListener('keydown', keyboardHandler);
      return () => {
        window.removeEventListener('keydown', keyboardHandler);
      };
    }, [keyboardHandler]);

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={innerRef}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
