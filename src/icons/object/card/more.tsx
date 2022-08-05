import * as React from 'react';
import type { IconProps } from '../../../core';
import { castIconProps } from '../../../core';

const More = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M13.503 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13.503 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13.503 18a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
    </svg>
  );
};

More.defaultProps = {
  height: 24,
  width: 24,
};
export default More;
