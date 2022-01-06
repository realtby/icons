import * as React from 'react';
import type { IconProps } from '../../../core';
import { castIconProps } from '../../../core';

const NumberLife = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" {...props}>
      <path
        d="M6.66 11.1c0 .5-.41.92-.93.92a.93.93 0 1 1 0-1.85c.52 0 .93.41.93.93zm0-6.2a.93.93 0 0 1-1.86 0 .93.93 0 0 1 1.86 0zm1.65-3.89L8.75.7A12.22 12.22 0 0 1 11.2 8c0 2.64-.91 5.35-2.45 7.32l-.44-.33A13.8 13.8 0 0 0 10.05 8c0-2.77-.58-4.83-1.74-6.99z"
        fill="#03278F"
        stroke="#03278F"
      />
    </svg>
  );
};

NumberLife.defaultProps = {
  height: 16,
  width: 16,
};
export default NumberLife;
