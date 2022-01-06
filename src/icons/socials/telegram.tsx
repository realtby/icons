import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Telegram = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 25 24" {...props}>
      <path d="m8.85 14.65-.33 4.65c.47 0 .68-.2.92-.44l2.22-2.12 4.6 3.36c.84.47 1.44.23 1.67-.77l3.01-14.15c.27-1.24-.45-1.73-1.27-1.43l-17.74 6.8c-1.2.47-1.2 1.14-.2 1.45l4.53 1.41 10.54-6.6c.5-.32.94-.14.57.19l-8.52 7.65z" />
    </svg>
  );
};

Telegram.defaultProps = {
  height: 16,
  width: 16,
};
export default Telegram;
