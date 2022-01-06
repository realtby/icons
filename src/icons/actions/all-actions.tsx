import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const AllActions = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 19 4" {...props}>
      <path d="M4 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm7 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm7 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
    </svg>
  );
};

AllActions.defaultProps = {
  height: 16,
  width: 16,
};
export default AllActions;
