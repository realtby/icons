import * as React from 'react';
import type { IconProps } from '../../../core';
import { castIconProps } from '../../../core';

const ZoomPlus = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 24 24" {...props}>
      <g clipPath="url(#093-a)" fillRule="evenodd" clipRule="evenodd">
        <path d="M20.003 9c0 4.32-3.45 8-9.5 8-6.051 0-9.5-3.68-9.5-8s3.449-8 9.5-8c6.05 0 9.5 3.68 9.5 8Zm-3.458 7.542C14.912 17.464 12.874 18 10.503 18c-6.5 0-10.5-4.03-10.5-9s4-9 10.5-9 10.5 4.03 10.5 9c0 2.822-1.29 5.341-3.595 6.991l6.373 6.373a.5.5 0 0 1-.707.707l-6.53-6.53Z" />
        <path d="M11.003 5a.5.5 0 1 0-1 0v3.5h-3.5a.5.5 0 0 0 0 1h3.5V13a.5.5 0 0 0 1 0V9.5h3.5a.5.5 0 1 0 0-1h-3.5V5Z" />
      </g>
    </svg>
  );
};

ZoomPlus.defaultProps = {
  height: 24,
  width: 24,
};
export default ZoomPlus;
