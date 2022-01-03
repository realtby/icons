import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Login = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 15 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.003 1C5.599 1 4.424 2.195 4.424 3.714c0 1.52 1.175 2.715 2.579 2.715 1.404 0 2.579-1.195 2.579-2.715C9.582 2.194 8.407 1 7.002 1zm2.173 5.666a3.767 3.767 0 001.406-2.952C10.582 1.684 9 0 7.002 0 5.007 0 3.425 1.683 3.425 3.714c0 1.195.548 2.27 1.406 2.952-2.792.789-4.827 3.449-4.827 6.578 0 .656.296 1.36.975 1.683C1.94 15.384 3.826 16 7.003 16c3.177 0 5.063-.616 6.025-1.073.678-.323.975-1.027.975-1.683 0-3.13-2.035-5.789-4.827-6.578zm-2.624.763c-3.045 0-5.55 2.583-5.55 5.815 0 .39.171.668.405.78.814.387 2.552.976 5.596.976s4.782-.59 5.596-.976c.233-.112.404-.39.404-.78 0-3.232-2.505-5.815-5.55-5.815h-.9z"
      />
    </svg>
  );
};

Login.defaultProps = {
  height: 16,
  width: 16,
};
export default Login;
