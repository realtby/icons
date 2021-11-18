import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Next = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);
  return (
    <svg viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.65.646a.5.5 0 01.706 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 11-.707-.708L9.796 4.5H1.003a.5.5 0 010-1h8.793L7.649 1.354a.5.5 0 010-.708z"
        fill="#1D2126"
      />
    </svg>
  );
};

Next.defaultProps = {
  height: 16,
  width: 16,
};
export default Next;
