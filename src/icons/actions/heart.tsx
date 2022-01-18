import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Heart = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 24 18" {...props}>
      <path
        d="M21.845 2.257C18.591-1.676 12 4.878 12 4.878S5.408-1.676 2.155 2.257C-3.238 8.777 12 19 12 19S27.238 8.776 21.845 2.257Z"
        strokeWidth={2}
      />
    </svg>
  );
};

Heart.defaultProps = {
  height: 16,
  width: 16,
};
export default Heart;
