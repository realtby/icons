import * as React from 'react';
import type { IconProps } from '../../../core';
import { castIconProps } from '../../../core';

const NumberMts = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 12 16" fill="none" {...props}>
      <path
        d="m2.704 3.325.002-.003c.537-.927 1.123-1.646 1.692-2.127C4.975.71 5.492.5 5.903.5c.409 0 .924.21 1.502.698.57.482 1.159 1.202 1.704 2.127 1.122 1.93 1.794 4.315 1.794 6.363 0 1.49-.405 2.954-1.225 4.032-.807 1.063-2.036 1.78-3.775 1.78-1.744 0-2.972-.718-3.778-1.78C1.307 12.645.904 11.183.903 9.695c.051-2.247.672-4.44 1.801-6.37Z"
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
