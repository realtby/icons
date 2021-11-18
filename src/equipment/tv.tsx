import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Tv = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);
  return (
    <svg viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M6.503 17a.5.5 0 000 1v-1zm11 1a.5.5 0 100-1v1zm-15-17h19V0h-19v1zm20.5 1.5v10h1v-10h-1zm-1.5 11.5h-19v1h19v-1zm-20.5-1.5v-10h-1v10h1zm1.5 1.5a1.5 1.5 0 01-1.5-1.5h-1a2.5 2.5 0 002.5 2.5v-1zm20.5-1.5a1.5 1.5 0 01-1.5 1.5v1a2.5 2.5 0 002.5-2.5h-1zM21.503 1a1.5 1.5 0 011.5 1.5h1a2.5 2.5 0 00-2.5-2.5v1zm-19-1a2.5 2.5 0 00-2.5 2.5h1a1.5 1.5 0 011.5-1.5V0zm5.5 15v2h1v-2h-1zm7 0v2h1v-2h-1zm-8.5 3h11v-1h-11v1z"
        fill="#1D2126"
      />
    </svg>
  );
};

Tv.defaultProps = {
  height: 16,
  width: 16,
};
export default Tv;
