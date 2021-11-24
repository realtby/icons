import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Copy = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.003 2a2 2 0 012-2h6a2 2 0 012 2 2 2 0 012 2v6a2 2 0 01-2 2h-6a2 2 0 01-2-2 2 2 0 01-2-2V2zm2-1h6a1 1 0 011 1v6a1 1 0 01-1 1h-6a1 1 0 01-1-1V2a1 1 0 011-1zm1 9a1 1 0 001 1h6a1 1 0 001-1V4a1 1 0 00-1-1v5a2 2 0 01-2 2h-5z"
        fill="#000"
      />
    </svg>
  );
};

Copy.defaultProps = {
  height: 16,
  width: 16,
};
export default Copy;
