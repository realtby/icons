import * as React from 'react';
import type { IconProps } from '../../../core';
import { castIconProps } from '../../../core';

const Map = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.28.05a.5.5 0 0 1 .36-.03l6.84 1.95L15.33.53A.5.5 0 0 1 16 1v12.5a.5.5 0 0 1-.27.45l-4 2a.5.5 0 0 1-.36.03l-6.85-1.95-3.84 1.44A.5.5 0 0 1 0 15V2.5a.5.5 0 0 1 .28-.45l4-2zM5 13.12l6.45 1.85L15 13.19V1.72l-3 1.13v8.65a.5.5 0 1 1-1 0V2.88L4.55 1.03 1 2.81v11.47l3-1.13V4.5a.5.5 0 0 1 1 0v8.62z"
      />
    </svg>
  );
};

Map.defaultProps = {
  height: 16,
  width: 16,
};
export default Map;
