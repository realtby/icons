import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Telegram = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8.85 14.65l-.33 4.654c.473 0 .678-.203.924-.447l2.22-2.121 4.597 3.367c.844.47 1.438.223 1.665-.776l3.019-14.143c.268-1.247-.45-1.735-1.272-1.43L1.931 10.548c-1.21.47-1.192 1.145-.205 1.451L6.26 13.41l10.536-6.592c.496-.329.947-.147.576.181l-8.522 7.653z"
        fill="#039BE5"
      />
    </svg>
  );
};

Telegram.defaultProps = {
  height: 16,
  width: 16,
};
export default Telegram;
