import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Fridge = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);
  return (
    <svg viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3.003 23.5a.5.5 0 001 0h-1zm1-13.5a.5.5 0 00-1 0h1zm-1 4a.5.5 0 001 0h-1zm11 9.5a.5.5 0 001 0h-1zM2.503 1h13V0h-13v1zm14.5 1.5v17h1v-17h-1zm-1.5 18.5h-13v1h13v-1zm-14.5-1.5v-17h-1v17h1zM.503 8h17V7h-17v1zm2 13a1.5 1.5 0 01-1.5-1.5h-1a2.5 2.5 0 002.5 2.5v-1zm14.5-1.5a1.5 1.5 0 01-1.5 1.5v1a2.5 2.5 0 002.5-2.5h-1zM15.503 1a1.5 1.5 0 011.5 1.5h1a2.5 2.5 0 00-2.5-2.5v1zm-13-1a2.5 2.5 0 00-2.5 2.5h1a1.5 1.5 0 011.5-1.5V0zm.5 22v1.5h1V22h-1zm0-12v4h1v-4h-1zm11 12v1.5h1V22h-1z"
        fill="#1D2126"
      />
    </svg>
  );
};

Fridge.defaultProps = {
  height: 16,
  width: 16,
};
export default Fridge;
