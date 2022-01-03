import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const NotIndicated = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 15 4" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.003 2a1.5 1.5 0 011.5-1.5h11a1.5 1.5 0 110 3h-11A1.5 1.5 0 01.003 2z"
      />
    </svg>
  );
};

NotIndicated.defaultProps = {
  height: 16,
  width: 16,
};
export default NotIndicated;
