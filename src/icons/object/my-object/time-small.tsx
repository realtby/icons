import * as React from 'react';
import type { IconProps } from '../../../core';
import { castIconProps } from '../../../core';

const TimeSmall = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 14 14" {...props}>
      <path d="M7 7.5a.5.5 0 0 1-.5-.5V3.5a.5.5 0 0 1 1 0v2.334l1.316-1.316a.5.5 0 1 1 .707.707L7.402 7.346a.498.498 0 0 1-.304.144A.503.503 0 0 1 7 7.5Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 7A6 6 0 1 1 1 7a6 6 0 0 1 12 0Zm-6 5A5 5 0 1 0 7 2a5 5 0 0 0 0 10Z"
      />
    </svg>
  );
};

TimeSmall.defaultProps = {
  height: 14,
  width: 14,
};
export default TimeSmall;
