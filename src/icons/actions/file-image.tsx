import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const FileImage = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 13 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 2.5A2.5 2.5 0 0 1 2.5 0h7A2.5 2.5 0 0 1 12 2.5v11A2.5 2.5 0 0 1 9.5 16h-7A2.5 2.5 0 0 1 0 13.5v-11zM2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 9.5 1h-7z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 4.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 3 8zm0 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5z"
      />
    </svg>
  );
};

FileImage.defaultProps = {
  height: 16,
  width: 16,
};
export default FileImage;
