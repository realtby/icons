import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Info = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.003 20c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm1-14a1 1 0 11-2 0 1 1 0 012 0zm-1 2a1 1 0 011 1v5a1 1 0 11-2 0V9a1 1 0 011-1z"
        fill="#1E62E7"
      />
    </svg>
  );
};

Info.defaultProps = {
  height: 16,
  width: 16,
};
export default Info;
