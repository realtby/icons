import * as React from 'react';
import type { IconProps } from '../../../core';
import { castIconProps } from '../../../core';

const ChevronDoubleUp = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 13 14" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.3.8a1 1 0 0 1 1.4 0l5 5a1 1 0 1 1-1.41 1.4L6 2.92l-4.29 4.3A1 1 0 0 1 .3 5.79l5-5zM6 8.9l-4.29 4.3A1 1 0 0 1 .3 11.79l5-5a1 1 0 0 1 1.41 0l5 5a1 1 0 1 1-1.41 1.42L6 8.9z"
      />
    </svg>
  );
};

ChevronDoubleUp.defaultProps = {
  height: 16,
  width: 16,
};
export default ChevronDoubleUp;
