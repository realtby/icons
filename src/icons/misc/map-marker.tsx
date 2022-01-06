import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const MapMarker = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 13 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.87.84C3 .18 4.48 0 6 0s3.01.18 4.13.84C11.3 1.54 12 2.71 12 4.5c0 1.12-.25 2.14-.55 2.73a65.3 65.3 0 0 1-3.07 5.1 158.58 158.58 0 0 1-1.8 2.72l-.12.17-.04.06-.42.59-.41-.6-.03-.03-.12-.17a96.82 96.82 0 0 1-1.81-2.63A44.98 44.98 0 0 1 .55 7.2 6.88 6.88 0 0 1 0 4.5C0 2.71.7 1.54 1.87.84zM6 14.13a177.67 177.67 0 0 0 1.55-2.35 64.92 64.92 0 0 0 3.02-5c.21-.42.44-1.29.44-2.28 0-1.48-.55-2.3-1.38-2.8C8.74 1.2 7.48 1 6 1s-2.74.18-3.62.7C1.55 2.2 1 3.03 1 4.5c0 .97.25 1.85.46 2.29.7 1.51 1.93 3.48 3 5.1A95.81 95.81 0 0 0 6 14.13zM5.73 3C4.73 3 4 3.72 4 4.47v.06C4 5.28 4.72 6 5.73 6h.55C7.28 6 8 5.28 8 4.53v-.06C8 3.72 7.28 3 6.28 3h-.55zM3 4.47C3 3.06 4.3 2 5.73 2h.55C7.72 2 9 3.06 9 4.47v.06C9 5.94 7.72 7 6.28 7h-.55C4.29 7 3 5.94 3 4.53v-.06z"
      />
    </svg>
  );
};

MapMarker.defaultProps = {
  height: 16,
  width: 16,
};
export default MapMarker;
