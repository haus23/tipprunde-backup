import {
  type PopoverProps,
  Popover as RACPopover,
  composeRenderProps,
} from 'react-aria-components';
import { tv } from '#utils/tv';

const popoverStyles = tv({
  base: ['rounded-default bg-content-1 shadow-default'],
});

namespace Popover {
  export interface Props extends PopoverProps {}
}

export function Popover({ className, ...props }: Popover.Props) {
  return (
    <RACPopover
      className={composeRenderProps(className, (className, renderProps) =>
        popoverStyles({ ...renderProps, className }),
      )}
      {...props}
    />
  );
}
