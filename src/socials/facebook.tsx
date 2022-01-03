import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Facebook = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M15.89 11.987h-2.588V22h-3.94V11.987h-1.86v-3.52h1.86V6.18c0-1.634.745-4.181 3.974-4.181l2.917.009v3.416h-2.114c-.346 0-.836.182-.836.956v2.077h2.933l-.338 3.52-.009.009z" />
    </svg>
  );
};

Facebook.defaultProps = {
  height: 16,
  width: 16,
};
export default Facebook;
