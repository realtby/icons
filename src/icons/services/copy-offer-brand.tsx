import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const CopyOfferBrand = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 9h10l-6 14.942V24H5v-5h4v-5h5V9Z"
        fill="#FFD02F"
      />
      <path
        d="M21 16a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V16Z"
        stroke="#1D2126"
        strokeWidth={1.5}
      />
      <path
        d="M16 18.5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-10a3 3 0 0 1 3-3h3"
        stroke="#1D2126"
        strokeWidth={1.5}
      />
      <path
        d="M12.5 6.5h5m-5 4h5m-5 4H15m-8.5-3h2m-2 4H9"
        stroke="#1D2126"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

CopyOfferBrand.defaultProps = {
  height: 16,
  width: 16,
};
export default CopyOfferBrand;
