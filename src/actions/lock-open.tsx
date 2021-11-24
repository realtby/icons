import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const LockOpen = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.003 4a4 4 0 118 0v3a1 1 0 11-2 0V4a2 2 0 10-4 0v3h.5a1.5 1.5 0 011.5 1.5v6a1.5 1.5 0 01-1.5 1.5h-9a1.5 1.5 0 01-1.5-1.5v-6a1.5 1.5 0 011.5-1.5h6.5V4zm-3.5 7.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
        fill="#000"
      />
    </svg>
  );
};

LockOpen.defaultProps = {
  height: 16,
  width: 16,
};
export default LockOpen;
