import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Info = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 21 20" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm1-14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1 2a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1z"
      />
    </svg>
  );
};

Info.defaultProps = {
  height: 16,
  width: 16,
};
export default Info;
