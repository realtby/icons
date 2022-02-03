import * as React from 'react';
import type { IconProps } from '../../../core';
import { castIconProps } from '../../../core';

const NumberA1 = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" {...props}>
      <g clipPath="url(#yvp-a)">
        <path d="m16 .5-.5-.5v10.28l.5-.31V.5zm-3.8 4.54-.87-.12a12.12 12.12 0 0 0 2.04-1.16v.68c-.37.24-.76.45-1.16.62l-.01-.02z" />
        <path
          d="M13.72.24a4.3 4.3 0 0 1-2.4 2.6v2.08a12.12 12.12 0 0 0 2.04-1.16v6.34l2.16.19V0l-1.79.24z"
          fill="url(#yvp-b)"
        />
        <path
          d="m8.99 14.77.92.31-.74-2.58-.83.04.65 2.23zm-1.36-4.61L6.8 6.99l.47-1.52 1.29 4.67h-.93v.02z"
          fill="#790000"
        />
        <path d="m4.56 2.34 1.16-.62L.8 16l-.8-.56 4.56-13.1z" fill="#B40302" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M.8 16 5.72 1.72l3.02.56 3.76 12.49-2.6.31-.73-2.58-4 .24-.86 2.9L.8 16zM7.27 5.48l1.29 4.67H5.84l1.42-4.67z"
          fill="url(#yvp-c)"
        />
      </g>
      <defs>
        <linearGradient
          id="yvp-b"
          x1={13.42}
          y1={0}
          x2={13.42}
          y2={10.28}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5B5B5B" />
          <stop offset={1} stopColor="#141414" />
        </linearGradient>
        <linearGradient
          id="yvp-c"
          x1={3.63}
          y1={5.42}
          x2={11.27}
          y2={15.2}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA0100" />
          <stop offset={1} stopColor="#9B0000" />
        </linearGradient>
        <clipPath id="yvp-a">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

NumberA1.defaultProps = {
  height: 16,
  width: 16,
};
export default NumberA1;