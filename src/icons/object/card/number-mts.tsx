import * as React from 'react';
import type { IconProps } from '../../../core';
import { castIconProps } from '../../../core';

const NumberMts = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 12 16" {...props}>
      <path
        d="M2.74 3.33A8.1 8.1 0 0 1 4.46 1.2C5.05.7 5.58.5 6 .5c.42 0 .95.21 1.54.7.58.48 1.18 1.2 1.74 2.13a13.11 13.11 0 0 1 1.82 6.36c0 1.49-.4 2.95-1.24 4.03A4.64 4.64 0 0 1 6 15.5a4.63 4.63 0 0 1-3.85-1.78A6.63 6.63 0 0 1 .9 9.69a13.02 13.02 0 0 1 1.84-6.36z"
        fill="#E30613"
        stroke="#E30613"
      />
    </svg>
  );
};

NumberMts.defaultProps = {
  height: 16,
  width: 16,
};
export default NumberMts;
