import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const AllActionsFill = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 0a6 6 0 00-6 6v20a6 6 0 006 6h20a6 6 0 006-6V6a6 6 0 00-6-6H6zm5.003 16a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
        fill="#000"
      />
    </svg>
  );
};

AllActionsFill.defaultProps = {
  height: 16,
  width: 16,
};
export default AllActionsFill;
