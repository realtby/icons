import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const KeyFill = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.61 1.61a5.5 5.5 0 1 1 2.33 9.16l-1.08 1.08a.5.5 0 0 1-.36.15H6v1.5a.5.5 0 0 1-.5.5H4v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .15-.35l5.08-5.08A5.5 5.5 0 0 1 6.6 1.6zm5.4 3.89a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
      />
    </svg>
  );
};

KeyFill.defaultProps = {
  height: 16,
  width: 16,
};
export default KeyFill;
