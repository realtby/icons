import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const ReportsMenuBrand = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <g clipPath="url(#qy1-a)">
        <path d="M18.5 6 8 24h16V6h-5.5Z" fill="#FFD02F" />
        <path
          d="M7.496 6h9m-9 4h9m-9 8h6m-6-4h9m-10 9.5h11a3 3 0 0 0 3-3v-17a3 3 0 0 0-3-3h-11a3 3 0 0 0-3 3v17a3 3 0 0 0 3 3Z"
          stroke="#1D2126"
          fill="none"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="qy1-a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

ReportsMenuBrand.defaultProps = {
  height: 16,
  width: 16,
};
export default ReportsMenuBrand;
