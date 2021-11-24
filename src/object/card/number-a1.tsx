import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const NumberA1 = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#prefix__clip0_6249:37769)">
        <path
          d="M16.003.496L15.507 0v10.28l.496-.312V.496zM12.187 5.04l-.864-.12c.716-.32 1.399-.708 2.04-1.16v.68c-.37.241-.76.447-1.168.616l-.008-.016z"
          fill="#000"
        />
        <path
          d="M13.723.24a4.306 4.306 0 01-2.4 2.592V4.92c.716-.32 1.399-.708 2.04-1.16v6.344l2.16.184V0L13.73.24h-.008z"
          fill="url(#prefix__paint0_linear_6249:37769)"
        />
        <path
          d="M8.987 14.768l.92.312-.736-2.584-.832.048.648 2.224zM7.635 10.16l-.832-3.168.464-1.52 1.288 4.672h-.92v.016z"
          fill="#790000"
        />
        <path d="M4.563 2.336l1.16-.616L.803 16l-.8-.56 4.56-13.096v-.008z" fill="#B40302" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M.803 16l4.92-14.28 3.016.56 3.76 12.488-2.592.312-.736-2.584-4 .24-.864 2.896L.803 16zM7.267 5.48l1.288 4.672H5.85L7.267 5.48z"
          fill="url(#prefix__paint1_linear_6249:37769)"
        />
      </g>
      <defs>
        <linearGradient
          id="prefix__paint0_linear_6249:37769"
          x1={13.419}
          y1={0}
          x2={13.419}
          y2={10.28}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5B5B5B" />
          <stop offset={1} stopColor="#141414" />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear_6249:37769"
          x1={3.635}
          y1={5.416}
          x2={11.267}
          y2={15.2}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA0100" />
          <stop offset={1} stopColor="#9B0000" />
        </linearGradient>
        <clipPath id="prefix__clip0_6249:37769">
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
