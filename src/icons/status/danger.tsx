import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Danger = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 21 20" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.74.72a2.45 2.45 0 0 0-3.47 0L.72 8.27a2.45 2.45 0 0 0 0 3.46l7.55 7.55a2.45 2.45 0 0 0 3.47 0l7.55-7.55a2.45 2.45 0 0 0 0-3.46L11.74.72zM10 12a1 1 0 0 1-1-1V6a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1zm0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
      />
    </svg>
  );
};

Danger.defaultProps = {
  height: 16,
  width: 16,
};
export default Danger;
