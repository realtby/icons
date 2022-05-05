import * as React from 'react';
import type { IconProps } from '../../../core';
import { castIconProps } from '../../../core';

const Flame = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 15 20" {...props}>
      <g clipPath="url(#fkq-a)">
        <path
          d="M12.55 7.23s.2 1.54-.64 2.15c0 0 .92-4.62-6.2-8.88.31.64.5 1.44.5 2.32 0 2.07-1.03 3.75-2.3 3.75-.8 0-1.51-.68-1.92-1.7C1.6 5.5-.31 8.98.05 12.6c.42 4.37 4.49 5.8 6.95 6.89 0 0 4.15-1.07 6.05-4.25 1.78-2.98.74-6.78-.5-8.02z"
          fill="url(#fkq-b)"
        />
        <path
          d="M7 7.16s3.25 2.83 2.47 6.09c0 0 1.35-.8 1.92-2.32 0 0 .67 5.62-4.39 7.01 0 0-3.7-1.4-3.6-4.88 0 0 .87 1.08 1.47 1.26 0 0-.49-1.15.01-2.57C5.42 10.2 6.28 9.3 7 7.16z"
          fill="url(#fkq-c)"
        />
      </g>
      <defs>
        <linearGradient
          id="fkq-b"
          x1={3.76}
          y1={10}
          x2={10.64}
          y2={10}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFBD53" />
          <stop offset={1} stopColor="#F80" />
        </linearGradient>
        <linearGradient
          id="fkq-c"
          x1={3.76}
          y1={12.55}
          x2={10.63}
          y2={12.55}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFEC94" />
          <stop offset={1} stopColor="#FFCF00" />
        </linearGradient>
        <clipPath id="fkq-a">
          <path fill="#fff" transform="translate(0 .5)" d="M0 0h14v19H0z" />
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
