import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const OffersGarage = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 40 40" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.298 3.197a.667.667 0 0 0-.582 0L3.377 11.131a.667.667 0 0 0-.375.6V37h5.004V16.5a.5.5 0 0 1 .5-.5h23a.5.5 0 0 1 .5.5V37h4.996V11.73a.666.666 0 0 0-.375-.6l-16.33-7.933ZM31.007 37v-6h-22v6h22Zm6.496 1a.5.5 0 0 0 .5-.5V11.73c0-.638-.364-1.22-.938-1.499l-16.33-7.933a1.667 1.667 0 0 0-1.456 0L2.942 10.23a1.667 1.667 0 0 0-.94 1.5V37.5a.5.5 0 0 0 .5.5h35ZM9.007 30h22v-6h-22v6Zm0-7h22v-6h-22v6Z"
      />
    </svg>
  );
};

OffersGarage.defaultProps = {
  height: 16,
  width: 16,
};
export default OffersGarage;
