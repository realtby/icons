import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const FileImage = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);
  return (
    <svg viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.003 2.5a2.5 2.5 0 012.5-2.5h7a2.5 2.5 0 012.5 2.5v11a2.5 2.5 0 01-2.5 2.5h-7a2.5 2.5 0 01-2.5-2.5v-11zm2.5-1.5a1.5 1.5 0 00-1.5 1.5v11a1.5 1.5 0 001.5 1.5h7a1.5 1.5 0 001.5-1.5v-11a1.5 1.5 0 00-1.5-1.5h-7z"
        fill="#1D2126"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.003 4.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM3.003 8a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM3.003 11.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5z"
        fill="#1D2126"
      />
    </svg>
  );
};

FileImage.defaultProps = {
  height: 16,
  width: 16,
};
export default FileImage;
