import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const WashingMachine = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M15.003 3a.5.5 0 100-1v1zm-3-1a.5.5 0 000 1V2zm-9.5-1h13V0h-13v1zm14.5 1.5v19h1v-19h-1zm-1.5 20.5h-13v1h13v-1zm-14.5-1.5v-19h-1v19h1zm1.5 1.5a1.5 1.5 0 01-1.5-1.5h-1a2.5 2.5 0 002.5 2.5v-1zm14.5-1.5a1.5 1.5 0 01-1.5 1.5v1a2.5 2.5 0 002.5-2.5h-1zM15.503 1a1.5 1.5 0 011.5 1.5h1a2.5 2.5 0 00-2.5-2.5v1zm-13-1a2.5 2.5 0 00-2.5 2.5h1a1.5 1.5 0 011.5-1.5V0zm11.5 14a5 5 0 01-5 5v1a6 6 0 006-6h-1zm-5 5a5 5 0 01-5-5h-1a6 6 0 006 6v-1zm-5-5a5 5 0 015-5V8a6 6 0 00-6 6h1zm5-5a5 5 0 015 5h1a6 6 0 00-6-6v1zm-8.5-4h17V4h-17v1zm14.5-3H14.213h-1.937-.202-.013-.002H12.006h-.003v1c.002 0-.002 0 0 0H15.004V2z"
        fill="#1D2126"
      />
    </svg>
  );
};

WashingMachine.defaultProps = {
  height: 16,
  width: 16,
};
export default WashingMachine;
