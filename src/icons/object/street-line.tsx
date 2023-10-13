import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const StreetLine = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg {...props}>
      <g clipPath="url(#q7k-a)">
        <path d="M5.998 2.02a.667.667 0 0 1 .485.809L3.816 13.495a.667.667 0 1 1-1.293-.323L5.189 2.505A.667.667 0 0 1 6 2.02Zm5.818.485 2.667 10.666a.667.667 0 1 1-1.294.324L10.523 2.828a.665.665 0 1 1 1.293-.323Zm-3.313 8.828a.666.666 0 0 1 .662.589l.004.078v1.333a.667.667 0 0 1-1.328.078l-.005-.078V12a.667.667 0 0 1 .667-.667Zm0-4.666a.667.667 0 0 1 .666.666v1.334a.667.667 0 0 1-1.333 0V7.333a.667.667 0 0 1 .667-.666Zm0-4.667a.667.667 0 0 1 .662.589l.004.078V4a.667.667 0 0 1-1.328.078L7.836 4V2.667A.667.667 0 0 1 8.503 2Z" />
      </g>
      <defs>
        <clipPath id="q7k-a">
          <path fill="#fff" transform="translate(.503)" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

StreetLine.defaultProps = {
  height: 16,
  width: 16,
};
export default StreetLine;
