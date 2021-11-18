import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Email = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#prefix__clip0_6946:58852)" fill="#5B6473">
        <path d="M16.032 13.422l-2.01 1.913c-.815.775-2.25.792-3.082 0l-2.01-1.913-7.22 6.868c.27.118.566.188.88.188h19.782c.315 0 .61-.07.88-.188l-7.22-6.868z" />
        <path d="M22.372 4.478H2.59c-.315 0-.612.07-.88.188l7.714 7.34h.002v.002l2.509 2.386c.266.253.824.253 1.09 0l2.508-2.386.002-.001.001-.001 7.714-7.34a2.182 2.182 0 00-.88-.188zM.705 5.598a1.893 1.893 0 00-.224.88v12c0 .317.085.613.224.88l7.232-6.88-7.232-6.88zM24.257 5.598l-7.232 6.88 7.232 6.88c.139-.267.224-.563.224-.88v-12c0-.318-.085-.613-.224-.88z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_6946:58852">
          <path fill="#fff" transform="translate(.481 .478)" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

Email.defaultProps = {
  height: 16,
  width: 16,
};
export default Email;
