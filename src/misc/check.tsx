import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Check = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.553.29c.53.442.602 1.23.16 1.76l-6.25 7.5a1.25 1.25 0 01-1.876.05L.337 6.1a1.25 1.25 0 011.832-1.7l2.283 2.458L9.792.45a1.25 1.25 0 011.761-.16z"
        fill="#1D2126"
      />
    </svg>
  );
};

Check.defaultProps = {
  height: 16,
  width: 16,
};
export default Check;
