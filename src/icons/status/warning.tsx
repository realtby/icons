import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Warning = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 21 18" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m11.5.9 8.36 15.37a1.2 1.2 0 0 1-.01 1.15c-.1.18-.25.32-.42.43a1.11 1.11 0 0 1-.56.15H1.14c-.2 0-.4-.05-.56-.15a1.15 1.15 0 0 1-.42-.43 1.19 1.19 0 0 1-.01-1.16L8.52.9a1.73 1.73 0 0 1 .62-.66 1.67 1.67 0 0 1 1.73 0c.26.16.47.38.62.66zM10 12a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1zm0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
      />
    </svg>
  );
};

Warning.defaultProps = {
  height: 16,
  width: 16,
};
export default Warning;
