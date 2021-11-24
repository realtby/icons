import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const CloseRoundedWhite = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M.003 8a8 8 0 1116 0 8 8 0 01-16 0z" fill="#fff" />
      <path
        d="M11.57 5.317a.625.625 0 10-.884-.884L8.003 7.116 5.32 4.433a.625.625 0 10-.884.884L7.119 8l-2.683 2.683a.625.625 0 10.884.884l2.683-2.683 2.683 2.683a.625.625 0 00.884-.884L8.887 8l2.683-2.683z"
        fill="#000"
      />
    </svg>
  );
};

CloseRoundedWhite.defaultProps = {
  height: 16,
  width: 16,
};
export default CloseRoundedWhite;
