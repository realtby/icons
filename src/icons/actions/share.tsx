import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Share = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 14 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 1.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM8.25 3a2.75 2.75 0 1 1 .77 1.9L5.69 7.4a2.76 2.76 0 0 1 0 1.17l3.34 2.52a2.75 2.75 0 1 1-.72 1.33l-3.33-2.5a2.75 2.75 0 1 1-.02-3.85l3.35-2.51A2.76 2.76 0 0 1 8.25 3zM3 6.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm8 5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z"
      />
    </svg>
  );
};

Share.defaultProps = {
  height: 16,
  width: 16,
};
export default Share;
