import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Back = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.356.646a.5.5 0 010 .708L2.21 3.5h8.793a.5.5 0 110 1H2.21l2.146 2.146a.5.5 0 11-.707.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.707 0z"
      />
    </svg>
  );
};

Back.defaultProps = {
  height: 16,
  width: 16,
};
export default Back;
