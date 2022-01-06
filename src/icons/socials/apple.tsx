import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Apple = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 25 24" {...props}>
      <path d="M11.94 6.54c-.85 0-2.17-.97-3.57-.94a5.26 5.26 0 0 0-4.46 2.73c-1.9 3.32-.5 8.22 1.37 10.92.9 1.32 1.98 2.8 3.41 2.75 1.37-.06 1.88-.9 3.54-.9 1.65 0 2.12.9 3.57.86 1.47-.02 2.4-1.33 3.3-2.66a11.81 11.81 0 0 0 1.5-3.09 4.78 4.78 0 0 1-.56-8.5 5.06 5.06 0 0 0-3.95-2.15c-1.8-.14-3.3.98-4.15.98zm3.03-3.08A4.76 4.76 0 0 0 16.09 0c-1.09.05-2.4.73-3.18 1.64-.7.81-1.3 2.11-1.15 3.36 1.2.1 2.45-.62 3.2-1.54z" />
    </svg>
  );
};

Apple.defaultProps = {
  height: 16,
  width: 16,
};
export default Apple;
