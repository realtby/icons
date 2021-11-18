import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Payments = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);
  return (
    <svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.253 3.063A2.5 2.5 0 016.15 1.035l13.788 2.431a2.5 2.5 0 012.028 2.896L20.27 15.97a.908.908 0 01-.268.5V20.5a2.5 2.5 0 01-2.5 2.5h-15a2.5 2.5 0 01-2.5-2.5v-9a2.5 2.5 0 012.2-2.482l1.05-5.955zM3.222 9h14.28a2.5 2.5 0 012.5 2.5v.229l.544-3.078L3.804 5.699 3.222 9zm.756-4.286l16.741 2.952.26-1.477a1.5 1.5 0 00-1.216-1.738L5.976 2.02a1.5 1.5 0 00-1.738 1.217l-.26 1.477zM2.503 10a1.5 1.5 0 00-1.5 1.5v9a1.5 1.5 0 001.5 1.5h15a1.5 1.5 0 001.5-1.5v-9a1.5 1.5 0 00-1.5-1.5h-15zm.5 9.5a.5.5 0 01.5-.5h1a.5.5 0 110 1h-1a.5.5 0 01-.5-.5zm4 0a.5.5 0 01.5-.5h1a.5.5 0 110 1h-1a.5.5 0 01-.5-.5zm4 0a.5.5 0 01.5-.5h1a.5.5 0 110 1h-1a.5.5 0 01-.5-.5zm4 0a.5.5 0 01.5-.5h1a.5.5 0 110 1h-1a.5.5 0 01-.5-.5z"
        fill="#000"
      />
    </svg>
  );
};

Payments.defaultProps = {
  height: 16,
  width: 16,
};
export default Payments;
