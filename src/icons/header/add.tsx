import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Add = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.003 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-12zm6.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 1 0 0-1h-3v-3z"
      />
    </svg>
  );
};

Add.defaultProps = {
  height: 16,
  width: 16,
};
export default Add;
