import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Check = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 13 10" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.55.29c.53.44.6 1.23.16 1.76l-6.25 7.5a1.25 1.25 0 0 1-1.87.05L.34 6.1a1.25 1.25 0 0 1 1.83-1.7l2.28 2.46L9.8.45a1.25 1.25 0 0 1 1.76-.16z"
      />
    </svg>
  );
};

Check.defaultProps = {
  height: 16,
  width: 16,
};
export default Check;
