import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Warning = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.493.896l8.366 15.369a1.191 1.191 0 01-.013 1.159c-.1.175-.243.32-.415.422a1.115 1.115 0 01-.565.154H1.14c-.198 0-.393-.053-.565-.154a1.152 1.152 0 01-.416-.422 1.19 1.19 0 01-.012-1.16L8.515.896A1.73 1.73 0 019.141.24a1.672 1.672 0 011.725 0c.261.158.477.384.625.656h.002zM10.003 12a1 1 0 01-1-1V7a1 1 0 012 0v4a1 1 0 01-1 1zm0 3a1 1 0 110-2 1 1 0 010 2z"
        fill="#FDAA08"
      />
    </svg>
  );
};

Warning.defaultProps = {
  height: 16,
  width: 16,
};
export default Warning;
