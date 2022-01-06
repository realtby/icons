import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const CheckGroup = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 13 4" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.003 2a1.3 1.3 0 0 1 1.3-1.3h9.4a1.3 1.3 0 1 1 0 2.6h-9.4A1.3 1.3 0 0 1 .003 2z"
      />
    </svg>
  );
};

CheckGroup.defaultProps = {
  height: 16,
  width: 16,
};
export default CheckGroup;
