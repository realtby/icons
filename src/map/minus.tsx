import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Minus = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 16 2" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.403 1a.6.6 0 01.6-.6h14a.6.6 0 110 1.2h-14a.6.6 0 01-.6-.6z"
      />
    </svg>
  );
};

Minus.defaultProps = {
  height: 16,
  width: 16,
};
export default Minus;
