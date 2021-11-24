import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Address = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.003 1v15h4v-5h4v5h4V1h-1V0h-10v1h-1zm3 2h2v2h-2V3zm2 4h-2v2h2V7zm2-4h2v2h-2V3zm2 4h-2v2h2V7z"
        fill="#1D2126"
      />
    </svg>
  );
};

Address.defaultProps = {
  height: 16,
  width: 16,
};
export default Address;
