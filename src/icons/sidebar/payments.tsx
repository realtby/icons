import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Payments = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 23 23" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.25 3.06a2.5 2.5 0 0 1 2.9-2.03l13.79 2.44a2.5 2.5 0 0 1 2.03 2.9l-1.7 9.6a.9.9 0 0 1-.27.5v4.03a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 0 20.5v-9a2.5 2.5 0 0 1 2.2-2.48l1.05-5.96zM3.22 9H17.5a2.5 2.5 0 0 1 2.5 2.5v.23l.55-3.08L3.8 5.7 3.22 9zm.76-4.29 16.74 2.96.26-1.48a1.5 1.5 0 0 0-1.22-1.74L5.98 2.02a1.5 1.5 0 0 0-1.74 1.22L3.98 4.7zM2.5 10A1.5 1.5 0 0 0 1 11.5v9A1.5 1.5 0 0 0 2.5 22h15a1.5 1.5 0 0 0 1.5-1.5v-9a1.5 1.5 0 0 0-1.5-1.5h-15zm.5 9.5a.5.5 0 0 1 .5-.5h1a.5.5 0 1 1 0 1h-1a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h1a.5.5 0 1 1 0 1h-1a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h1a.5.5 0 1 1 0 1h-1a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h1a.5.5 0 1 1 0 1h-1a.5.5 0 0 1-.5-.5z"
      />
    </svg>
  );
};

Payments.defaultProps = {
  height: 16,
  width: 16,
};
export default Payments;
