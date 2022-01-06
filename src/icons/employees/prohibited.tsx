import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Prohibited = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-2 0a6 6 0 0 1-9.47 4.89l8.36-8.37A5.98 5.98 0 0 1 14 8zm-2.52-4.89L3.1 11.48a6 6 0 0 1 8.37-8.37z"
      />
    </svg>
  );
};

Prohibited.defaultProps = {
  height: 16,
  width: 16,
};
export default Prohibited;
