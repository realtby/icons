import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const ArrowUp = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 12 6" fill="none" {...props}>
      <path
        clipRule="evenodd"
        d="M11.784 5.625a1 1 0 0 1-1.406.156l-4.375-3.5-4.375 3.5a1 1 0 1 1-1.25-1.562l5-4a1 1 0 0 1 1.25 0l5 4a1 1 0 0 1 .156 1.406Z"
      />
    </svg>
  );
};

ArrowUp.defaultProps = {
  height: 16,
  width: 16,
};
export default ArrowUp;
