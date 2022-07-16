import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const ArrowBack = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 24 24" {...props}>
      <g clipPath="url(#pl4-a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.71 3.293a1 1 0 0 1 0 1.414L8.417 12l7.293 7.293a1 1 0 1 1-1.414 1.414l-8-8a1 1 0 0 1 0-1.414l8-8a1 1 0 0 1 1.414 0Z"
        />
      </g>
      <defs>
        <clipPath id="pl4-a">
          <path fill="#fff" transform="translate(.003)" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

ArrowBack.defaultProps = {
  height: 24,
  width: 24,
};
export default ArrowBack;
