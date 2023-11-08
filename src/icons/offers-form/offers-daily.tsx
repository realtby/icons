import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const OffersDaily = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 40 40" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 37c9.389 0 17-7.611 17-17S29.389 3 20 3 3 10.611 3 20s7.611 17 17 17Zm0 1c9.941 0 18-8.059 18-18S29.941 2 20 2 2 10.059 2 20s8.059 18 18 18Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 32.833c7.088 0 12.833-5.745 12.833-12.833S27.088 7.167 20 7.167 7.167 12.912 7.167 20 12.912 32.833 20 32.833ZM20 34c7.732 0 14-6.268 14-14S27.732 6 20 6 6 12.268 6 20s6.268 14 14 14Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.003 9.015a.5.5 0 0 1 .5.5V19.5h7.803a.5.5 0 1 1 0 1h-8.303a.5.5 0 0 1-.5-.5V9.515a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  );
};

OffersDaily.defaultProps = {
  height: 16,
  width: 16,
};
export default OffersDaily;
