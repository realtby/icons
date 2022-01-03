import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const FolderOpen = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M2.003 0a2 2 0 00-2 2v8.99c0-.371.105-.75.331-1.094l2.63-4A1.983 1.983 0 014.62 5h7.383V4c0-1.1-.9-2-2-2h-4a2 2 0 00-2-2h-2z" />
      <path d="M4.62 6a.982.982 0 00-.82.445l-2.63 4C.733 11.11 1.203 12 1.99 12h10.395c.33 0 .638-.167.82-.445l2.63-4C16.274 6.89 15.804 6 15.016 6H4.621z" />
    </svg>
  );
};

FolderOpen.defaultProps = {
  height: 16,
  width: 16,
};
export default FolderOpen;
