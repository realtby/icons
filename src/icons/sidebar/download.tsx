import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Download = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 25 24" fill="none" {...props}>
      <path d="M11.5 3.5a.5.5 0 0 1 1 0h-1Zm.854 13.354a.5.5 0 0 1-.708 0l-3.182-3.182a.5.5 0 1 1 .708-.708L12 15.793l2.828-2.829a.5.5 0 1 1 .708.708l-3.182 3.182ZM12.5 3.5v13h-1v-13h1ZM2 16.5a.5.5 0 0 0-1 0h1Zm21 0a.5.5 0 0 0-1 0h1Zm0 3v-3h-1v3h1Zm-22-3v3h1v-3H1ZM2.5 21h19v-1h-19v1ZM1 19.5A1.5 1.5 0 0 0 2.5 21v-1a.5.5 0 0 1-.5-.5H1Zm21 0a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5h-1Z" />
    </svg>
  );
};

Download.defaultProps = {
  height: 16,
  width: 16,
};
export default Download;
