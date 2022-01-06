import * as React from 'react';
import type { IconProps } from '../../../core';
import { castIconProps } from '../../../core';

const More = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 4 16" {...props}>
      <path d="M3.503 2a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
    </svg>
  );
};

More.defaultProps = {
  height: 16,
  width: 16,
};
export default More;
