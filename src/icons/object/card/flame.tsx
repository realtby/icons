import * as React from 'react';
import type { IconProps } from '../../../core';
import { castIconProps } from '../../../core';

const Flame = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 14 19" {...props}>
      <g clipPath="url(#cbr-a)">
        <path
          d="M12.547 6.733s.198 1.535-.638 2.152c0 0 .92-4.626-6.196-8.885.309.638.493 1.443.493 2.318 0 2.07-1.027 3.747-2.295 3.747-.805 0-1.513-.677-1.923-1.7-.38.649-2.296 4.128-1.942 7.746C.474 16.483 4.538 17.91 7.004 19c0 0 4.15-1.07 6.049-4.248 1.781-2.982.733-6.779-.506-8.02Z"
          fill="url(#cbr-b)"
        />
        <path
          d="M7.003 6.663s3.248 2.823 2.467 6.087c0 0 1.348-.797 1.923-2.32 0 0 .671 5.616-4.39 7.014 0 0-3.706-1.395-3.6-4.88 0 0 .864 1.08 1.468 1.255 0 0-.488-1.145.013-2.572.537-1.532 1.39-2.445 2.12-4.584Z"
          fill="url(#cbr-c)"
        />
      </g>
      <defs>
        <linearGradient
          id="cbr-b"
          x1={3.762}
          y1={9.5}
          x2={10.636}
          y2={9.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFBD53" />
          <stop offset={1} stopColor="#F80" />
        </linearGradient>
        <linearGradient
          id="cbr-c"
          x1={3.761}
          y1={12.053}
          x2={10.635}
          y2={12.053}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFEC94" />
          <stop offset={1} stopColor="#FFCF00" />
        </linearGradient>
        <clipPath id="cbr-a">
          <path fill="#fff" transform="translate(.003)" d="M0 0h14v19H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

Flame.defaultProps = {
  height: 19,
  width: 14,
};
export default Flame;
