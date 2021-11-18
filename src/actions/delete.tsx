import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Delete = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);
  return (
    <svg viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M5.003 7.5a.5.5 0 011 0v5a.5.5 0 01-1 0v-5zM7.503 7.5a.5.5 0 011 0v5a.5.5 0 01-1 0v-5zM10.503 7a.5.5 0 00-.5.5v5a.5.5 0 001 0v-5a.5.5 0 00-.5-.5z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.003 0a2 2 0 00-2 2h-2.5a1.5 1.5 0 100 3h.5v9a2 2 0 002 2h8a2 2 0 002-2V5h.5a1.5 1.5 0 100-3h-2.5a2 2 0 00-2-2h-4zm5 2h-6a1 1 0 011-1h4a1 1 0 011 1zm-8 12V5h10v9a1 1 0 01-1 1h-8a1 1 0 01-1-1zm11.5-11h-13a.5.5 0 000 1h13a.5.5 0 100-1z"
        fill="#000"
      />
    </svg>
  );
};

Delete.defaultProps = {
  height: 16,
  width: 16,
};
export default Delete;
