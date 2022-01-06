import * as React from 'react';
import type { IconProps } from '../../../core';
import { castIconProps } from '../../../core';

const Bus = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 13 16" {...props}>
      <path d="M3 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 14h-1v1c0 .4-.3.67-.54.8-.27.13-.6.2-.96.2s-.69-.07-.95-.2c-.25-.13-.55-.4-.55-.8v-1h-3v1c0 .4-.29.67-.54.8-.27.13-.6.2-.96.2s-.69-.07-.95-.2-.55-.4-.55-.8v-1h-1a.5.5 0 0 1-.5-.5v-11A2.5 2.5 0 0 1 2.5 0h7A2.5 2.5 0 0 1 12 2.5v11a.5.5 0 0 1-.5.5zM1 2.5A1.5 1.5 0 0 1 2.5 1h7A1.5 1.5 0 0 1 11 2.5V8H1V2.5zM1 9h10v4H1V9zm7.5 5.9V14h1v.9c-.09.05-.25.1-.5.1s-.4-.05-.5-.09zm-6-.9h1v.91c-.08.04-.25.09-.5.09s-.4-.05-.5-.09V14z"
      />
    </svg>
  );
};

Bus.defaultProps = {
  height: 16,
  width: 16,
};
export default Bus;
