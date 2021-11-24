import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const AllActions = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 19 4" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M4.003 2a2 2 0 11-4 0 2 2 0 014 0zM11.003 2a2 2 0 11-4 0 2 2 0 014 0zM18.003 2a2 2 0 11-4 0 2 2 0 014 0z"
        fill="#9BA8AC"
      />
    </svg>
  );
};

AllActions.defaultProps = {
  height: 16,
  width: 16,
};
export default AllActions;
