import type { SVGProps } from 'react';

import { tv } from 'tailwind-variants';
import iconsHref from './sprite.svg';
import type { IconName } from './types.ts';

const iconStyles = tv({ base: 'inline size-5 self-center' });

namespace Icon {
  export interface Props extends SVGProps<SVGSVGElement> {
    name: IconName;
  }
}

function Icon({ name, className, children, ...props }: Icon.Props) {
  if (children) {
    return (
      <span className="flex items-center gap-2">
        <Icon name={name} className={className} {...props} />
        {children}
      </span>
    );
  }
  return (
    <svg
      {...props}
      role="img"
      aria-label={`${name} icon`}
      className={iconStyles({ className })}
    >
      <use href={`${iconsHref}#${name}`} />
    </svg>
  );
}

export { Icon, type IconName };
