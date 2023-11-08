import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const OffersLongRent = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 40 40" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 5H2.5a.5.5 0 0 0-.5.5v31a.5.5 0 0 0 .5.5h35a.5.5 0 0 0 .5-.5v-31a.5.5 0 0 0-.5-.5H31v1h6v6H3V6h5V5Zm4 1V5h5v1h-5Zm9 0h6V5h-6v1ZM3 13h34v23H3V13Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 7V4a1 1 0 1 0-2 0v3a1 1 0 0 0 2 0Zm-1-5a2 2 0 0 0-2 2v3a2 2 0 1 0 4 0V4a2 2 0 0 0-2-2ZM8 19a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Zm1 0v2h2v-2H9ZM8 28a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Zm1 0v2h2v-2H9ZM17 19a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2Zm1 0v2h2v-2h-2ZM17 28a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2Zm1 0v2h2v-2h-2ZM27 19a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2Zm1 0v2h2v-2h-2ZM27 28a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2Zm1 0v2h2v-2h-2ZM20 7V4a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0Zm-1-5a2 2 0 0 0-2 2v3a2 2 0 1 0 4 0V4a2 2 0 0 0-2-2ZM30 7V4a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0Zm-1-5a2 2 0 0 0-2 2v3a2 2 0 1 0 4 0V4a2 2 0 0 0-2-2Z"
      />
    </svg>
  );
};

OffersLongRent.defaultProps = {
  height: 16,
  width: 16,
};
export default OffersLongRent;
