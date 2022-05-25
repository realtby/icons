import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Play = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 56 56" fill="none" {...props}>
      <path
        clipRule="evenodd"
        d="M2.003 28.001c0-14.359 11.64-25.999 25.999-25.999 14.358 0 25.998 11.64 25.998 26C54 42.36 42.36 54 28.002 54c-14.359 0-26-11.64-26-25.999ZM28.002.002c-15.464 0-28 12.536-28 28C.003 43.463 12.539 56 28.003 56 43.465 56 56 43.464 56 28S43.465.002 28.002.002ZM22.15 15.527a1 1 0 0 0-1.527.85v23.25a1 1 0 0 0 1.527.85l18.75-11.625a1 1 0 0 0 0-1.7L22.15 15.527Zm.473 22.303V18.174l15.851 9.828-15.851 9.828Z"
      />
    </svg>
  );
};

Play.defaultProps = {
  height: 16,
  width: 16,
};
export default Play;
