import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const AllActionsFill = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 32 32" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 0a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6H6zm5 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm7 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm5 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
      />
    </svg>
  );
};

AllActionsFill.defaultProps = {
  height: 16,
  width: 16,
};
export default AllActionsFill;
