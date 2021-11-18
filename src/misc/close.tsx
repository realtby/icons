import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Close = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);
  return (
    <svg viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.296.293a1 1 0 011.414 0l6.293 6.293L14.296.293a1 1 0 111.414 1.414L9.417 8l6.293 6.293a1 1 0 11-1.414 1.414L8.003 9.414 1.71 15.707a1 1 0 01-1.414-1.414L6.589 8 .296 1.707a1 1 0 010-1.414z"
        fill="#000"
      />
    </svg>
  );
};

Close.defaultProps = {
  height: 16,
  width: 16,
};
export default Close;
