import * as React from 'react';
import type { IconProps } from '../../../core';
import { castIconProps } from '../../../core';

const NotPublished = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 11 10" {...props}>
      <path d="M5 2.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 .28.45l2 1a.5.5 0 1 0 .45-.9L5 5.2V2.5z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 5A5 5 0 1 1 0 5a5 5 0 0 1 10 0zM9 5a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"
      />
    </svg>
  );
};

NotPublished.defaultProps = {
  height: 16,
  width: 16,
};
export default NotPublished;
