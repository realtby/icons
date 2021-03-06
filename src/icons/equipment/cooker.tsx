import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Cooker = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 25 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.003 2.5a2.5 2.5 0 0 1 2.5-2.5h19a2.5 2.5 0 0 1 2.5 2.5v19a2.5 2.5 0 0 1-2.5 2.5h-19a2.5 2.5 0 0 1-2.5-2.5v-19zm2.5-1.5a1.5 1.5 0 0 0-1.5 1.5v19a1.5 1.5 0 0 0 1.5 1.5h19a1.5 1.5 0 0 0 1.5-1.5v-19a1.5 1.5 0 0 0-1.5-1.5h-19zm4 3a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm-3.5 2.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zm14.5-2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm-3.5 2.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zm-7.5 8.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm-3.5 2.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zm14.5-2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm-3.5 2.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
      />
    </svg>
  );
};

Cooker.defaultProps = {
  height: 16,
  width: 16,
};
export default Cooker;
