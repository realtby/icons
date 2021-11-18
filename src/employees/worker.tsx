import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Worker = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M4.003 4a4 4 0 118 0 4 4 0 01-8 0zM.105 15.007C.579 12.551 2.769 9 8.003 9l-1.5 4 1.5 2 1.5-2-1.5-4c5.234 0 7.424 3.551 7.898 6.007.105.542-.346.993-.898.993h-14C.451 16 0 15.55.105 15.007z"
        fill="#000"
      />
    </svg>
  );
};

Worker.defaultProps = {
  height: 16,
  width: 16,
};
export default Worker;
