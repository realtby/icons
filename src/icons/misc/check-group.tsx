import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const CheckGroup = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 13 4" fill="none" {...props}>
      <path
        clipRule="evenodd"
        d="M.003 2.2c0-.828.582-1.5 1.3-1.5h9.4c.718 0 1.3.672 1.3 1.5s-.582 1.5-1.3 1.5h-9.4c-.718 0-1.3-.672-1.3-1.5Z"
      />
    </svg>
  );
};

CheckGroup.defaultProps = {
  height: 16,
  width: 16,
};
export default CheckGroup;
