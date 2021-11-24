import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Id = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.503 1a2.5 2.5 0 00-2.5 2.5v9a2.5 2.5 0 002.5 2.5h9a2.5 2.5 0 002.5-2.5v-9a2.5 2.5 0 00-2.5-2.5h-9zm-3.5 2.5a3.5 3.5 0 013.5-3.5h9a3.5 3.5 0 013.5 3.5v9a3.5 3.5 0 01-3.5 3.5h-9a3.5 3.5 0 01-3.5-3.5v-9zm4.5.5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zm2.5.5a.5.5 0 01.5-.5h1.5a4 4 0 110 8h-1.5a.5.5 0 01-.5-.5v-7zm1 .5v6h1a3 3 0 100-6h-1z"
        fill="#1D2126"
      />
    </svg>
  );
};

Id.defaultProps = {
  height: 16,
  width: 16,
};
export default Id;
