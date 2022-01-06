import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const WashingMachine = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 19 24" {...props}>
      <path d="M15 3a.5.5 0 1 0 0-1v1zm-3-1a.5.5 0 0 0 0 1V2zM2.5 1h13V0h-13v1zM17 2.5v19h1v-19h-1zM15.5 23h-13v1h13v-1zM1 21.5v-19H0v19h1zM2.5 23A1.5 1.5 0 0 1 1 21.5H0A2.5 2.5 0 0 0 2.5 24v-1zM17 21.5a1.5 1.5 0 0 1-1.5 1.5v1a2.5 2.5 0 0 0 2.5-2.5h-1zM15.5 1A1.5 1.5 0 0 1 17 2.5h1A2.5 2.5 0 0 0 15.5 0v1zm-13-1A2.5 2.5 0 0 0 0 2.5h1A1.5 1.5 0 0 1 2.5 1V0zM14 14a5 5 0 0 1-5 5v1a6 6 0 0 0 6-6h-1zm-5 5a5 5 0 0 1-5-5H3a6 6 0 0 0 6 6v-1zm-5-5a5 5 0 0 1 5-5V8a6 6 0 0 0-6 6h1zm5-5a5 5 0 0 1 5 5h1a6 6 0 0 0-6-6v1zM.5 5h17V4H.5v1zM15 2h-3v1h3V2z" />
    </svg>
  );
};

WashingMachine.defaultProps = {
  height: 16,
  width: 16,
};
export default WashingMachine;
