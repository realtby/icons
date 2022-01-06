import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Edit = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.95.4a1.33 1.33 0 0 1 1.9 0l1.76 1.76a1.33 1.33 0 0 1 0 1.89l-1.47 1.47-.01.01-9.73 9.73a.5.5 0 0 1-.27.14L.59 16a.5.5 0 0 1-.58-.58l.59-3.54a.5.5 0 0 1 .15-.29l9.73-9.72.01-.01L11.95.39zm1.18.7a.34.34 0 0 0-.47 0l-1.12 1.12 2.24 2.24 1.13-1.12a.34.34 0 0 0 0-.47L13.13 1.1zM1.8 11.96l2.25 2.24 9.02-9.03-2.24-2.24-9.03 9.03zm-.69 2.93L1.43 13 3 14.58l-1.89.31z"
      />
    </svg>
  );
};

Edit.defaultProps = {
  height: 16,
  width: 16,
};
export default Edit;
