import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const ArrowNext = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.296 3.293a1 1 0 0 0 0 1.414L15.589 12l-7.293 7.293a1 1 0 1 0 1.414 1.414l8-8a1 1 0 0 0 0-1.414l-8-8a1 1 0 0 0-1.414 0Z"
      />
    </svg>
  );
};

ArrowNext.defaultProps = {
  height: 24,
  width: 24,
};
export default ArrowNext;
