import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Next = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 12 8" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.65.65a.5.5 0 0 1 .7 0l3 3a.5.5 0 0 1 0 .7l-3 3a.5.5 0 1 1-.7-.7L9.8 4.5H1a.5.5 0 0 1 0-1h8.8L7.65 1.35a.5.5 0 0 1 0-.7z"
      />
    </svg>
  );
};

Next.defaultProps = {
  height: 16,
  width: 16,
};
export default Next;
