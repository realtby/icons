import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Visible = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 21 14" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 1.8a9.75 9.75 0 0 0-7.55 3.54h-.01c-.18.2-.42.42-.63.62l-.02.02c-.23.21-.43.4-.57.55a.9.9 0 0 0-.19.29.5.5 0 0 0-.03.18.5.5 0 0 0 .03.18.9.9 0 0 0 .2.29c.13.14.33.34.56.55l.02.02.63.61v.01a9.75 9.75 0 0 0 7.56 3.54 9.75 9.75 0 0 0 7.56-3.54c.18-.2.42-.42.64-.62l.01-.02c.24-.21.44-.4.57-.55a.93.93 0 0 0 .2-.28.5.5 0 0 0 .02-.19.5.5 0 0 0-.02-.19.93.93 0 0 0-.2-.28 11.79 11.79 0 0 0-.57-.55l-.01-.02a13.96 13.96 0 0 1-.63-.61l-.01-.01A9.75 9.75 0 0 0 10.5 1.8zM2.2 4.67C4.6 1.99 7.4.8 10.5.8c3.1 0 5.91 1.2 8.3 3.87.15.16.37.36.6.58.22.2.46.43.62.6.18.2.31.4.39.6.08.2.1.4.1.55 0 .16-.02.34-.1.55a1.9 1.9 0 0 1-.39.6c-.16.17-.4.4-.62.6-.23.22-.45.42-.6.58a10.75 10.75 0 0 1-8.3 3.87c-3.1 0-5.9-1.2-8.3-3.87a13.98 13.98 0 0 0-.6-.58 12.37 12.37 0 0 1-.62-.6 1.89 1.89 0 0 1-.39-.62A1.49 1.49 0 0 1 .5 7c0-.15.02-.33.1-.53a1.89 1.89 0 0 1 .39-.61c.16-.18.4-.4.61-.6v-.01c.24-.22.45-.42.6-.58zm8.3-.08a2.41 2.41 0 1 0 0 4.82 2.41 2.41 0 0 0 0-4.82zM7.1 7a3.41 3.41 0 1 1 6.83 0A3.41 3.41 0 0 1 7.1 7z"
      />
    </svg>
  );
};

Visible.defaultProps = {
  height: 16,
  width: 16,
};
export default Visible;
