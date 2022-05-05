import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Region = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg fill="none" {...props}>
      <g clipPath="url(#t8y-a)" fill="#1D2126">
        <path d="M5 14V4L0 6v10l5-2ZM16 14V6.5L14.25 9c-.8 1-1.473 1-1.75 1-.277 0-.962-.235-1.5-1v7l5-2ZM6 14V4l2.42 1.21C8.853 6.364 9.22 6.971 10 8v8l-4-2Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 3.5c0-2-1.5-3.5-3.5-3.5S9 1.5 9 3.5 12 9 12.5 9 16 5.5 16 3.5ZM12.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        />
      </g>
      <defs>
        <clipPath id="t8y-a">
          <path fill="#fff" transform="translate(.003)" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

Region.defaultProps = {
  height: 16,
  width: 16,
};
export default Region;
