import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const More = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);
  return (
    <svg viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3.503 2a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM3.503 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM3.503 14a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        fill="#1D2126"
      />
    </svg>
  );
};

More.defaultProps = {
  height: 16,
  width: 16,
};
export default More;
