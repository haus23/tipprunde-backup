import {
  type LinkProps,
  Link as RACLink,
  composeRenderProps,
} from 'react-aria-components';
import { tv } from 'tailwind-variants';
import { focusRingStyles } from '../common-styles';

const linkStyles = tv({
  extend: focusRingStyles,
  base: ['rounded-default transition-opacity hover:opacity-hover'],
});

namespace Link {
  export interface Props extends LinkProps {
    href: string;
  }
}

export function Link({ className, href, ...props }: Link.Props) {
  return (
    <RACLink
      {...props}
      href={href}
      className={composeRenderProps(className, (className, renderProps) =>
        linkStyles({ ...renderProps, className }),
      )}
    />
  );
}
