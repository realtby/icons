import * as React from 'react';
import type { IconProps } from '../../../core';
import { castIconProps } from '../../../core';

const MetroRounded = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" {...props}>
      <path d="m8.003 9-5-5v8l2-1V9l3 3 3-3v2l2 1V4l-5 5z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.003 8a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
      />
    </svg>
  );
};

MetroRounded.defaultProps = {
  height: 16,
  width: 16,
};
export default MetroRounded;
