import * as React from 'react';
import type { IconProps } from '../../../core';
import { castIconProps } from '../../../core';

const NumberA1 = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" fill="none" {...props}>
      <g clipPath="url(#r6k-a)">
        <path
          d="M16 .496 15.504 0v10.28L16 9.968V.496ZM12.184 5.04l-.864-.12a12.16 12.16 0 0 0 2.04-1.16v.68c-.37.241-.76.447-1.168.616l-.008-.016Z"
          fill="#000"
        />
        <path
          d="M13.72.24a4.304 4.304 0 0 1-2.4 2.592V4.92a12.16 12.16 0 0 0 2.04-1.16v6.344l2.16.184V0l-1.792.24h-.008Z"
          fill="#373737"
        />
        <path
          d="m8.984 14.768.92.312-.736-2.584-.832.048.648 2.224ZM7.632 10.16 6.8 6.992l.464-1.52L8.56 10.16h-.928Z"
          fill="#790000"
        />
        <path d="m4.56 2.336 1.16-.616L.8 16l-.8-.56L4.56 2.344v-.008Z" fill="#B40302" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M.8 16 5.72 1.72l3.016.56 3.76 12.488-2.592.312-.736-2.584-4 .24-.864 2.896L.8 16ZM7.264 5.48l1.288 4.672H5.848L7.264 5.48Z"
          fill="#E90000"
        />
      </g>
      <defs>
        <clipPath id="r6k-a">
          <path fill="#fff" transform="translate(.003)" d="M0 0h16v16H0z" />
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
