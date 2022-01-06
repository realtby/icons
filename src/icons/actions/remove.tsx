import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Remove = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" {...props}>
      <path d="M5 7.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0v-5zm2.5 0a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0v-5zm3-.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 0a2 2 0 0 0-2 2H1.5a1.5 1.5 0 1 0 0 3H2v9a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5h.5a1.5 1.5 0 1 0 0-3H12a2 2 0 0 0-2-2H6zm5 2H5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1zM3 14V5h10v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM14.5 3h-13a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1z"
      />
    </svg>
  );
};

Remove.defaultProps = {
  height: 16,
  width: 16,
};
export default Remove;
