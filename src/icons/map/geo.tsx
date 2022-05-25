import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Geo = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 25 24" fill="none" {...props}>
      <path d="M12.603 2.5a.6.6 0 1 0-1.2 0h1.2Zm8.9 10.1a.6.6 0 1 0 0-1.2v1.2Zm-10.1 8.9a.6.6 0 0 0 1.2 0h-1.2Zm-8.9-10.1a.6.6 0 1 0 0 1.2v-1.2Zm15.9.6a6.4 6.4 0 0 1-6.4 6.4v1.2a7.6 7.6 0 0 0 7.6-7.6h-1.2Zm-6.4 6.4a6.4 6.4 0 0 1-6.4-6.4h-1.2a7.6 7.6 0 0 0 7.6 7.6v-1.2Zm-6.4-6.4a6.4 6.4 0 0 1 6.4-6.4V4.4a7.6 7.6 0 0 0-7.6 7.6h1.2Zm6.4-6.4a6.4 6.4 0 0 1 6.4 6.4h1.2a7.6 7.6 0 0 0-7.6-7.6v1.2Zm.6-.6V2.5h-1.2V5h1.2Zm6.4 7.6h2.5v-1.2h-2.5v1.2Zm-7.6 6.4v2.5h1.2V19h-1.2Zm-6.4-7.6h-2.5v1.2h2.5v-1.2Z" />
      <circle cx={12.003} cy={12} r={2} />
    </svg>
  );
};

Geo.defaultProps = {
  height: 16,
  width: 16,
};
export default Geo;
