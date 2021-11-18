import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

// For this icon to be displayed correctly, fill={false} must be set
const Flame = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 15 20" fill="false" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#prefix__clip0_6643:59654)">
        <path
          d="M12.547 7.233s.198 1.535-.638 2.152c0 0 .92-4.626-6.196-8.885.309.638.493 1.443.493 2.318 0 2.07-1.027 3.747-2.295 3.747-.805 0-1.513-.677-1.923-1.7-.38.649-2.296 4.128-1.942 7.746.428 4.372 4.492 5.798 6.958 6.889 0 0 4.15-1.07 6.049-4.248 1.781-2.982.733-6.779-.506-8.02z"
          fill="url(#prefix__paint0_linear_6643:59654)"
        />
        <path
          d="M7.003 7.163s3.248 2.822 2.467 6.087c0 0 1.348-.797 1.923-2.32 0 0 .671 5.616-4.39 7.014 0 0-3.706-1.395-3.6-4.88 0 0 .864 1.08 1.468 1.255 0 0-.488-1.145.013-2.572.537-1.532 1.39-2.445 2.12-4.584z"
          fill="url(#prefix__paint1_linear_6643:59654)"
        />
      </g>
      <defs>
        <linearGradient
          id="prefix__paint0_linear_6643:59654"
          x1={3.762}
          y1={10}
          x2={10.636}
          y2={10}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFBD53" />
          <stop offset={1} stopColor="#F80" />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear_6643:59654"
          x1={3.761}
          y1={12.553}
          x2={10.635}
          y2={12.553}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFEC94" />
          <stop offset={1} stopColor="#FFCF00" />
        </linearGradient>
        <clipPath id="prefix__clip0_6643:59654">
          <path fill="#fff" transform="translate(.003 .5)" d="M0 0h14v19H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

Flame.defaultProps = {
  height: 16,
  width: 16,
};
export default Flame;
