import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const YouTube = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#prefix__clip0_6834:59179)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.393 4.514a3.007 3.007 0 012.115 2.115c.515 1.878.495 5.793.495 5.793s0 3.894-.494 5.772a3.007 3.007 0 01-2.116 2.116c-1.878.494-9.39.494-9.39.494s-7.493 0-9.39-.514a3.007 3.007 0 01-2.116-2.116c-.494-1.858-.494-5.772-.494-5.772s0-3.895.494-5.773a3.068 3.068 0 012.115-2.135C4.49 4 12.002 4 12.002 4s7.513 0 9.391.514zm-5.535 7.888L9.61 16V8.804l6.247 3.598z"
          fill="#F30F0F"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_6834:59179">
          <path fill="#fff" transform="translate(.003)" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

YouTube.defaultProps = {
  height: 16,
  width: 16,
};
export default YouTube;
