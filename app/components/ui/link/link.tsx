import {
  type LinkProps,
  Link as RACLink,
  composeRenderProps,
} from 'react-aria-components';

import { useLocation, useResolvedPath } from 'react-router-dom';
import { tv } from '#utils/tv';
import { focusRingStyles } from '../common-styles';

const linkStyles = tv({
  extend: focusRingStyles,
  base: [
    'inline-flex items-center justify-center rounded-default px-4 py-1 font-medium text-app-accent transition-opacity hover:opacity-hover',
  ],
});

const navLinkStyles = tv({
  extend: linkStyles,
  base: ['transition-colors'],
  variants: {
    isCurrent: { true: 'text-active' },
  },
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

namespace NavLink {
  export interface Props extends LinkProps {
    href: string;
  }
}

export function NavLink({ className, href, ...props }: NavLink.Props) {
  // See: https://github.com/remix-run/react-router/blob/main/packages/react-router-dom/index.tsx#L1030
  const path = useResolvedPath(href);
  const location = useLocation();

  const isActive = path.pathname === location.pathname;

  return (
    <RACLink
      {...(isActive && { 'aria-current': 'page' })}
      {...props}
      href={href}
      className={composeRenderProps(className, (className, renderProps) =>
        navLinkStyles({ ...renderProps, className }),
      )}
    />
  );
}
