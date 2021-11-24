import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Street = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.003 8v8h2V8h4.5l3.5-2.5-3.5-2.5h-4.5V0h-2v3h-6v5h6z"
        fill="#1D2126"
      />
    </svg>
  );
};

Street.defaultProps = {
  height: 16,
  width: 16,
};
export default Street;
