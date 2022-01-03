import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const LoginFill = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.792 6.813a3.333 3.333 0 10-3.577 0 6.23 6.23 0 00-4.879 6.081c0 .585.276 1.183.867 1.453.914.416 2.727.986 5.8.986s4.886-.57 5.8-.986c.591-.27.867-.868.867-1.453a6.23 6.23 0 00-4.878-6.08z"
      />
    </svg>
  );
};

LoginFill.defaultProps = {
  height: 16,
  width: 16,
};
export default LoginFill;
