import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Street = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.003 8v8h2V8h4.5l3.5-2.5-3.5-2.5h-4.5V0h-2v3h-6v5h6z"
      />
    </svg>
  );
};

Street.defaultProps = {
  height: 16,
  width: 16,
};
export default Street;
