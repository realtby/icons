import * as React from 'react';
import type { IconProps } from '../../../core';
import { castIconProps } from '../../../core';

const Paid = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 11 10" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 5A5 5 0 1 1 0 5a5 5 0 0 1 10 0zM9 5a4 4 0 1 1-1.03-2.68L4.5 5.8 2.86 4.15a.5.5 0 1 0-.71.7l2 2a.5.5 0 0 0 .7 0l3.7-3.7c.3.57.45 1.2.45 1.85z"
      />
    </svg>
  );
};

Paid.defaultProps = {
  height: 16,
  width: 16,
};
export default Paid;
