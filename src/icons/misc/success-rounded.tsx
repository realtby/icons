import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const SuccessRounded = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 49 48" {...props}>
      <path d="M33.65 18.47a1.5 1.5 0 1 0-2.3-1.94L21.33 28.4l-4.86-4.04a1.5 1.5 0 1 0-1.92 2.3l6 5a1.5 1.5 0 0 0 2.1-.18l11-13z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 24a24 24 0 1 1-48 0 24 24 0 0 1 48 0zm-3 0a21 21 0 1 1-42 0 21 21 0 0 1 42 0z"
      />
    </svg>
  );
};

SuccessRounded.defaultProps = {
  height: 16,
  width: 16,
};
export default SuccessRounded;
