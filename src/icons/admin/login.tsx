import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Login = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 15 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 1C5.6 1 4.42 2.2 4.42 3.71A2.65 2.65 0 0 0 7 6.43c1.4 0 2.58-1.2 2.58-2.72A2.65 2.65 0 0 0 7 1zm2.18 5.67a3.77 3.77 0 0 0 1.4-2.96A3.65 3.65 0 0 0 7 0C5 0 3.42 1.68 3.42 3.71c0 1.2.55 2.27 1.41 2.96A6.78 6.78 0 0 0 0 13.24c0 .66.3 1.36.98 1.69C1.94 15.38 3.83 16 7 16s5.07-.62 6.03-1.07c.68-.33.97-1.03.97-1.69a6.78 6.78 0 0 0-4.82-6.57zm-2.63.76A5.69 5.69 0 0 0 1 13.24c0 .4.17.67.4.78.82.4 2.56.98 5.6.98s4.79-.59 5.6-.98c.23-.1.4-.39.4-.78 0-3.23-2.5-5.81-5.55-5.81h-.9z"
      />
    </svg>
  );
};

Login.defaultProps = {
  height: 16,
  width: 16,
};
export default Login;
