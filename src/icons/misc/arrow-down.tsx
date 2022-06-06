import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const ArrowDown = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 12 6" fill="none" {...props}>
      <path
        clipRule="evenodd"
        d="M.222.375A1 1 0 0 1 1.628.22l4.375 3.5 4.375-3.5a1 1 0 1 1 1.25 1.562l-5 4a1 1 0 0 1-1.25 0l-5-4A1 1 0 0 1 .222.375Z"
      />
    </svg>
  );
};

ArrowDown.defaultProps = {
  height: 16,
  width: 16,
};
export default ArrowDown;
