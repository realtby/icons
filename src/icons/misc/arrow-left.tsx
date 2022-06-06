import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const ArrowLeft = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 6 12" fill="none" {...props}>
      <path
        clipRule="evenodd"
        d="M5.628 11.78a1 1 0 0 0 .156-1.405L2.284 6l3.5-4.375A1 1 0 1 0 4.222.375l-4 5a1 1 0 0 0 0 1.25l4 5a1 1 0 0 0 1.406.156Z"
      />
    </svg>
  );
};

ArrowLeft.defaultProps = {
  height: 16,
  width: 16,
};
export default ArrowLeft;
