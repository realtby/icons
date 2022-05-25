import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Plus = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" fill="none" {...props}>
      <g clipPath="url(#641-a)">
        <path
          clipRule="evenodd"
          d="M8.015 0c.348 0 .631.283.631.632v6.736h6.737a.632.632 0 0 1 0 1.264H8.646v6.736a.632.632 0 0 1-1.263 0V8.632H.646a.632.632 0 0 1 0-1.264h6.737V.632c0-.35.283-.632.632-.632Z"
        />
      </g>
      <defs>
        <clipPath id="641-a">
          <path fill="#fff" transform="translate(.003)" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

Plus.defaultProps = {
  height: 16,
  width: 16,
};
export default Plus;
