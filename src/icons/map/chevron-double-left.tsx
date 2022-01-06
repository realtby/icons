import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const ChevronDoubleLeft = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 19 18" {...props}>
      <path d="M9.71 1.7A1 1 0 1 0 8.3.3l1.4 1.4zM1.01 9 .3 8.3a1 1 0 0 0 0 1.4L1 9zm7.29 8.7a1 1 0 0 0 1.41-1.4L8.3 17.7zm9.41-16A1 1 0 1 0 16.3.3l1.41 1.4zM9.01 9l-.71-.7a1 1 0 0 0 0 1.4L9 9zm7.29 8.7a1 1 0 0 0 1.41-1.4l-1.41 1.4zM8.3.3l-8 8 1.4 1.4 8-8L8.3.3zm-8 9.4 8 8 1.41-1.4-8-8L.3 9.7zm16-9.4-8 8 1.4 1.4 8-8L16.3.3zm-8 9.4 8 8 1.41-1.4-8-8L8.3 9.7z" />
    </svg>
  );
};

ChevronDoubleLeft.defaultProps = {
  height: 16,
  width: 16,
};
export default ChevronDoubleLeft;
