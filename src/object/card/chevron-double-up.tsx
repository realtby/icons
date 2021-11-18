import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const ChevronDoubleUp = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);
  return (
    <svg viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.296.793a1 1 0 011.414 0l5 5a1 1 0 11-1.414 1.414L6.003 2.914 1.71 7.207A1 1 0 01.296 5.793l5-5zm.707 8.121L1.71 13.207a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 11-1.414 1.414L6.003 8.914z"
        fill="#1D2126"
      />
    </svg>
  );
};

ChevronDoubleUp.defaultProps = {
  height: 16,
  width: 16,
};
export default ChevronDoubleUp;
