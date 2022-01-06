import * as React from 'react';
import type { IconProps } from '../../../core';
import { castIconProps } from '../../../core';

const FreeHidden = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 11 10" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m9.9 5.98-.97-.2a4.02 4.02 0 0 0 0-1.56l.98-.2a5.03 5.03 0 0 1 0 1.96zm-.74-3.76-.83.56a4.03 4.03 0 0 0-1.1-1.1l.55-.84a5.03 5.03 0 0 1 1.38 1.38zM5.98.1l-.2.99a4.02 4.02 0 0 0-1.56 0L4.02.1a5.02 5.02 0 0 1 1.96 0zM2.22.85l.56.83a4.03 4.03 0 0 0-1.1 1.1l-.83-.55A5.03 5.03 0 0 1 2.22.84zM.1 4.02a5.02 5.02 0 0 0 0 1.96l.98-.2a4.02 4.02 0 0 1 0-1.56l-.98-.2zm.74 3.76.84-.56c.29.44.66.82 1.1 1.1l-.56.84A5.03 5.03 0 0 1 .84 7.78zm3.2 2.12.2-.99a4.02 4.02 0 0 0 1.55 0l.2.98a5.02 5.02 0 0 1-1.95 0zm3.75-.75-.55-.83a4.03 4.03 0 0 0 1.1-1.1l.83.55a5.03 5.03 0 0 1-1.38 1.38z"
      />
    </svg>
  );
};

FreeHidden.defaultProps = {
  height: 16,
  width: 16,
};
export default FreeHidden;
