import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const LoginFill = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 14 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.8 6.81a3.33 3.33 0 1 0-3.59 0A6.23 6.23 0 0 0 .34 12.9c0 .59.27 1.19.86 1.46.92.41 2.73.98 5.8.98s4.89-.57 5.8-.98c.6-.27.87-.87.87-1.46a6.23 6.23 0 0 0-4.88-6.08z"
      />
    </svg>
  );
};

LoginFill.defaultProps = {
  height: 16,
  width: 16,
};
export default LoginFill;
