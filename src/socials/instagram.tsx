import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Instagram = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M15.753 2h-7.5a6.25 6.25 0 00-6.25 6.25v7.5A6.25 6.25 0 008.253 22h7.5a6.25 6.25 0 006.25-6.25v-7.5A6.25 6.25 0 0015.753 2zm4.375 13.75a4.38 4.38 0 01-4.375 4.375h-7.5a4.38 4.38 0 01-4.375-4.375v-7.5a4.38 4.38 0 014.375-4.375h7.5a4.38 4.38 0 014.375 4.375v7.5z"
        fill="url(#prefix__paint0_linear_6834:59118)"
      />
      <path
        d="M12.003 7a5 5 0 100 10 5 5 0 000-10zm0 8.125A3.13 3.13 0 018.878 12a3.129 3.129 0 013.125-3.125A3.129 3.129 0 0115.128 12a3.13 3.13 0 01-3.125 3.125z"
        fill="url(#prefix__paint1_linear_6834:59118)"
      />
      <path
        d="M17.378 7.291a.666.666 0 100-1.332.666.666 0 000 1.332z"
        fill="url(#prefix__paint2_linear_6834:59118)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_6834:59118"
          x1={3.834}
          y1={20.169}
          x2={20.172}
          y2={3.831}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC107" />
          <stop offset={0.507} stopColor="#F44336" />
          <stop offset={0.99} stopColor="#9C27B0" />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear_6834:59118"
          x1={8.467}
          y1={15.535}
          x2={15.538}
          y2={8.465}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC107" />
          <stop offset={0.507} stopColor="#F44336" />
          <stop offset={0.99} stopColor="#9C27B0" />
        </linearGradient>
        <linearGradient
          id="prefix__paint2_linear_6834:59118"
          x1={16.907}
          y1={7.096}
          x2={17.849}
          y2={6.154}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC107" />
          <stop offset={0.507} stopColor="#F44336" />
          <stop offset={0.99} stopColor="#9C27B0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

Instagram.defaultProps = {
  height: 16,
  width: 16,
};
export default Instagram;
