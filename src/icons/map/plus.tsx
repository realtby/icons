import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Plus = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.003.4a.6.6 0 0 1 .6.6v6.4h6.4a.6.6 0 1 1 0 1.2h-6.4V15a.6.6 0 1 1-1.2 0V8.6h-6.4a.6.6 0 1 1 0-1.2h6.4V1a.6.6 0 0 1 .6-.6z"
      />
    </svg>
  );
};

Plus.defaultProps = {
  height: 16,
  width: 16,
};
export default Plus;
