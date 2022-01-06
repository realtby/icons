import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const FolderOpen = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 12" {...props}>
      <path d="M2 0a2 2 0 0 0-2 2v8.99c0-.37.1-.75.33-1.1l2.63-4A1.98 1.98 0 0 1 4.62 5H12V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2-2H2z" />
      <path d="M4.62 6a.98.98 0 0 0-.82.45l-2.63 4A1 1 0 0 0 1.99 12h10.4a.98.98 0 0 0 .81-.45l2.64-4A1 1 0 0 0 15.02 6H4.62z" />
    </svg>
  );
};

FolderOpen.defaultProps = {
  height: 16,
  width: 16,
};
export default FolderOpen;
