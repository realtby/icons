import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const LoginFill = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.15 10.544a4.11 4.11 0 0 0 1.853-3.453c0-2.26-1.79-4.091-4-4.091s-4 1.832-4 4.09a4.11 4.11 0 0 0 1.854 3.454c-3.35.756-5.854 3.81-5.854 7.462 0 .718.33 1.452 1.04 1.783C6.14 20.3 8.315 21 12.003 21c3.687 0 5.863-.7 6.96-1.21.71-.332 1.04-1.066 1.04-1.784 0-3.652-2.505-6.706-5.854-7.462Z"
      />
    </svg>
  );
};

LoginFill.defaultProps = {
  height: 24,
  width: 24,
};
export default LoginFill;
