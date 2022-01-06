import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Back = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 12 8" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.36.65a.5.5 0 0 1 0 .7L2.2 3.5H11a.5.5 0 1 1 0 1H2.2l2.15 2.15a.5.5 0 1 1-.71.7l-3-3a.5.5 0 0 1 0-.7l3-3a.5.5 0 0 1 .7 0z"
      />
    </svg>
  );
};

Back.defaultProps = {
  height: 16,
  width: 16,
};
export default Back;
