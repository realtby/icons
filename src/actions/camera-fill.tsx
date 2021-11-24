import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const CameraFill = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.121 0a1.5 1.5 0 00-1.342.83L4.194 2H1.503a1.5 1.5 0 00-1.5 1.5v9a1.5 1.5 0 001.5 1.5h13a1.5 1.5 0 001.5-1.5v-9a1.5 1.5 0 00-1.5-1.5h-2.691L11.227.83A1.5 1.5 0 009.884 0H6.12zm1.882 11a3 3 0 100-6 3 3 0 000 6z"
        fill="#000"
      />
    </svg>
  );
};

CameraFill.defaultProps = {
  height: 16,
  width: 16,
};
export default CameraFill;
