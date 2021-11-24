import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Success = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.003 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10zM7.385 9.069a1 1 0 01.325.224l1.293 1.293 3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 011.09-1.638z"
        fill="#2F9D5B"
      />
    </svg>
  );
};

Success.defaultProps = {
  height: 16,
  width: 16,
};
export default Success;
