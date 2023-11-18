import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Time = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="M10 10.5a.5.5 0 0 1-.5-.5V6.5a.5.5 0 0 1 1 0v2.334l1.316-1.316a.5.5 0 1 1 .707.707l-2.121 2.122a.498.498 0 0 1-.304.144.504.504 0 0 1-.098.009Z" />
      <path
        fillRule="evenodd"
        d="M16 10a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm-6 5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Time.defaultProps = {
  height: 20,
  width: 20,
};
export default Time;
