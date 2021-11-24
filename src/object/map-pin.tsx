import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const MapPin = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.003 9.9a5.002 5.002 0 00-1-9.9 5 5 0 00-1 9.9V16h2V9.9zm-2-6.9a1 1 0 11-2 0 1 1 0 012 0z"
        fill="#1D2126"
      />
    </svg>
  );
};

MapPin.defaultProps = {
  height: 16,
  width: 16,
};
export default MapPin;
