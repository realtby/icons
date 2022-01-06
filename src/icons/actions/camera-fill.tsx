import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const CameraFill = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 14" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.12 0a1.5 1.5 0 0 0-1.34.83L4.19 2H1.5A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-2.69L11.23.83A1.5 1.5 0 0 0 9.88 0H6.12zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
      />
    </svg>
  );
};

CameraFill.defaultProps = {
  height: 16,
  width: 16,
};
export default CameraFill;
