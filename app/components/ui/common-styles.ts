import { tv } from '#utils/tv';

export const focusRingStyles = tv({
  base: 'focus:outline-none',
  variants: {
    isFocusVisible: {
      true: 'ring-2 ring-default ring-offset-2 ring-offset-default',
    },
  },
});
