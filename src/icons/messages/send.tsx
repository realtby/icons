import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Send = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.19.11A.5.5 0 0 1 .73.05l15 7.5a.5.5 0 0 1 0 .9l-15 7.5a.5.5 0 0 1-.7-.58l2-7.37L.02.63A.5.5 0 0 1 .19.11zM2.93 8.5l-1.65 6.05 12.1-6.05H2.94zm10.46-1H2.92L1.28 1.45l12.1 6.05z"
      />
    </svg>
  );
};

Send.defaultProps = {
  height: 16,
  width: 16,
};
export default Send;
