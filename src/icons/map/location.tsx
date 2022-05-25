import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Location = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 14 14" fill="none" {...props}>
      <path d="M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Z" fill="#fff" />
      <path d="M13 7A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" fill="#E94649" />
    </svg>
  );
};

Location.defaultProps = {
  height: 16,
  width: 16,
};
export default Location;
