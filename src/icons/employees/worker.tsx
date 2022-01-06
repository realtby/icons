import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Worker = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path d="M4 4a4 4 0 1 1 8 0 4 4 0 0 1-8 0zM.1 15C.58 12.56 2.77 9 8 9l-1.5 4L8 15l1.5-2L8 9c5.24 0 7.43 3.55 7.9 6 .1.55-.35 1-.9 1H1c-.55 0-1-.45-.9-1z" />
    </svg>
  );
};

Worker.defaultProps = {
  height: 16,
  width: 16,
};
export default Worker;
