import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const MetroRounded = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);
  return (
    <svg viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8.003 9l-5-5v8l2-1V9l3 3 3-3v2l2 1V4l-5 5z" fill="#000" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.003 8a8 8 0 11-16 0 8 8 0 0116 0zm-1 0a7 7 0 11-14 0 7 7 0 0114 0z"
        fill="#000"
      />
    </svg>
  );
};

MetroRounded.defaultProps = {
  height: 16,
  width: 16,
};
export default MetroRounded;
