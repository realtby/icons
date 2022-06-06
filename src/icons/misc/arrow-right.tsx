import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const ArrowRight = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 6 12" fill="none" {...props}>
      <path
        clipRule="evenodd"
        d="M.378 11.78a1 1 0 0 1-.156-1.405L3.722 6l-3.5-4.375A1 1 0 1 1 1.784.375l4 5a1 1 0 0 1 0 1.25l-4 5a1 1 0 0 1-1.406.156Z"
      />
    </svg>
  );
};

ArrowRight.defaultProps = {
  height: 16,
  width: 16,
};
export default ArrowRight;
