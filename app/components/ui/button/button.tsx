import { forwardRef } from 'react';
import {
  ButtonContext,
  type ButtonProps,
  Button as RACButton,
  composeRenderProps,
  useContextProps,
} from 'react-aria-components';

import { type VariantProps, tv } from '#utils/tv';
import { focusRingStyles } from '../common-styles';

const buttonStyles = tv({
  extend: focusRingStyles,
  base: [
    'group z-0 transition',
    'relative inline-flex items-center justify-center',
    'h-10 min-w-20 gap-2 rounded-default px-4',
    'font-semibold text-small',
    'cursor-default select-none appearance-none ',
    'data-[pressed=true]:scale-95',
  ],
  variants: {
    variant: {
      solid: '',
      ghost: '',
    },
    color: {
      default: '',
      primary: '',
    },
  },
  defaultVariants: {
    variant: 'solid',
    color: 'default',
  },
  compoundVariants: [
    {
      variant: 'solid',
      color: 'default',
      class: 'bg-comp hover:bg-comp-hover',
    },
    {
      variant: 'solid',
      color: 'primary',
      class: 'bg-comp-primary text-comp-colored hover:bg-comp-primary-hover',
    },
    {
      variant: 'ghost',
      color: 'default',
      class: 'border-2 border-default hover:bg-comp-hover',
    },
  ],
});

namespace Button {
  export interface Props
    extends ButtonProps,
      VariantProps<typeof buttonStyles> {}
}

const Button = forwardRef<HTMLButtonElement, Button.Props>(
  ({ variant, color, ...componentProps }, componentRef) => {
    const [mergedProps, ref] = useContextProps(
      componentProps,
      componentRef,
      ButtonContext,
    );
    const { className, ...props } = mergedProps;

    return (
      <RACButton
        className={composeRenderProps(className, (className, renderProps) =>
          buttonStyles({ ...renderProps, variant, color, className }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button };
