import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Add = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);
  return (
    <svg viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.003 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2h-12zm6.5 4.5a.5.5 0 00-1 0v3h-3a.5.5 0 000 1h3v3a.5.5 0 001 0v-3h3a.5.5 0 100-1h-3v-3z"
        fill="#000"
      />
    </svg>
  );
};

Add.defaultProps = {
  height: 16,
  width: 16,
};
export default Add;
