import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Metro = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 14" {...props}>
      <path d="M13.2.5 8.1 7.74 2.86.66 0 12.53h3.88l.72-3.8 3.43 4.78 3.42-4.67.68 3.71H16L13.2.5z" />
    </svg>
  );
};

Metro.defaultProps = {
  height: 16,
  width: 16,
};
export default Metro;
