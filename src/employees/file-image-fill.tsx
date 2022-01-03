import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const FileImageFill = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 13 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.003 0a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2h-8zm1.5 3a.5.5 0 000 1h5a.5.5 0 000-1h-5zm-.5 4.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm.5 3.5a.5.5 0 000 1h3a.5.5 0 000-1h-3z"
      />
    </svg>
  );
};

FileImageFill.defaultProps = {
  height: 16,
  width: 16,
};
export default FileImageFill;
