import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const KeyFill = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.614 1.61a5.5 5.5 0 112.323 9.163l-1.08 1.08a.5.5 0 01-.354.147h-1.5v1.5a.5.5 0 01-.5.5h-1.5v1.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.146-.354l5.08-5.08a5.499 5.499 0 011.385-5.455zm5.389 3.89a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        fill="#000"
      />
    </svg>
  );
};

KeyFill.defaultProps = {
  height: 16,
  width: 16,
};
export default KeyFill;
