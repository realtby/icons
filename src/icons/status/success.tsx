import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Success = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 21 20" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zM7.38 9.07a1 1 0 0 1 .33.22l1.3 1.3 3.29-3.3a1 1 0 1 1 1.41 1.42l-4 4a1 1 0 0 1-1.41 0l-2-2a1 1 0 0 1 1.09-1.64z"
      />
    </svg>
  );
};

Success.defaultProps = {
  height: 16,
  width: 16,
};
export default Success;
