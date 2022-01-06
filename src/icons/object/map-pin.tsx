import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const MapPin = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 11 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 9.9A5 5 0 0 0 5 0a5 5 0 0 0-1 9.9V16h2V9.9zM4 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
      />
    </svg>
  );
};

MapPin.defaultProps = {
  height: 16,
  width: 16,
};
export default MapPin;
