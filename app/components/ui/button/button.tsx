import {
  type ButtonProps,
  Button as RACButton,
  composeRenderProps,
} from 'react-aria-components';
import { type VariantProps, tv } from 'tailwind-variants';
import { focusRingStyles } from '../common-styles';

const buttonStyles = tv({
  extend: focusRingStyles,
  base: [
    'z-0 group',
    'relative inline-flex cursor-default items-center justify-center select-none appearance-none outline-none font-semibold transition',
    'px-4 min-w-20 h-10 text-small gap-2 rounded-default',
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
      class: 'text-comp-colored bg-comp-primary hover:bg-comp-primary-hover',
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

export function Button({ className, variant, color, ...props }: Button.Props) {
  return (
    <RACButton
      className={composeRenderProps(className, (className, renderProps) =>
        buttonStyles({ ...renderProps, variant, color, className }),
      )}
      {...props}
    />
  );
}
