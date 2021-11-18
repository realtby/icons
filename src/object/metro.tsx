import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Metro = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);
  return (
    <svg viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M13.205.491l-5.112 7.26L2.87.66.003 12.532h3.88l.712-3.797 3.434 4.774 3.417-4.67.688 3.714h3.869L13.205.49z"
        fill="#1D2126"
      />
    </svg>
  );
};

Metro.defaultProps = {
  height: 16,
  width: 16,
};
export default Metro;
