import type { ReactNode } from 'react';
import {
  OverlayArrow,
  type PopoverProps,
  Popover as RACPopover,
  composeRenderProps,
} from 'react-aria-components';
import { tv } from '#utils/tv';

const popoverStyles = tv({
  base: ['group rounded-default bg-popover shadow-default'],
});

namespace Popover {
  export interface Props extends PopoverProps {
    children: ReactNode;
    withArrow?: boolean | undefined;
  }
}

export function Popover({
  className,
  withArrow,
  children,
  ...props
}: Popover.Props) {
  return (
    <RACPopover
      className={composeRenderProps(className, (className, renderProps) =>
        popoverStyles({ ...renderProps, className }),
      )}
      containerPadding={8}
      offset={withArrow ? 12 : 8}
      {...props}
    >
      {withArrow && (
        <OverlayArrow className="group">
          <svg
            role="img"
            aria-label="Pfeil, der auf den Trigger zeigt"
            width={12}
            height={12}
            viewBox="0 0 12 12"
            className="group-data-[placement=left]:-rotate-90 block fill-popover stroke-1 stroke-popover group-data-[placement=bottom]:rotate-180 group-data-[placement=right]:rotate-90"
          >
            <path d="M0 0 L6 6 L12 0" />
          </svg>
        </OverlayArrow>
      )}
      {children}
    </RACPopover>
  );
}
