import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Metro = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 14" fill="none" {...props}>
      <path d="m13.205.491-5.112 7.25L2.87.66.003 12.515h3.88l.712-3.792 3.434 4.768 3.417-4.663.688 3.708h3.869L13.205.491Z" />
    </svg>
  );
};

Metro.defaultProps = {
  height: 16,
  width: 16,
};
export default Metro;
