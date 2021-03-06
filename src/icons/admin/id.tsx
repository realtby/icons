import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Id = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.503 1a2.5 2.5 0 0 0-2.5 2.5v9a2.5 2.5 0 0 0 2.5 2.5h9a2.5 2.5 0 0 0 2.5-2.5v-9a2.5 2.5 0 0 0-2.5-2.5h-9zm-3.5 2.5a3.5 3.5 0 0 1 3.5-3.5h9a3.5 3.5 0 0 1 3.5 3.5v9a3.5 3.5 0 0 1-3.5 3.5h-9a3.5 3.5 0 0 1-3.5-3.5v-9zm4.5.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1.5a4 4 0 1 1 0 8h-1.5a.5.5 0 0 1-.5-.5v-7zm1 .5v6h1a3 3 0 1 0 0-6h-1z"
      />
    </svg>
  );
};

Id.defaultProps = {
  height: 16,
  width: 16,
};
export default Id;
