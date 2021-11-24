import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const NotPublished = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M5.003 2.5a.5.5 0 00-1 0v3a.5.5 0 00.276.447l2 1a.5.5 0 10.448-.894L5.003 5.19V2.5z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.003 5a5 5 0 11-10 0 5 5 0 0110 0zm-1 0a4 4 0 11-8 0 4 4 0 018 0z"
        fill="#000"
      />
    </svg>
  );
};

NotPublished.defaultProps = {
  height: 16,
  width: 16,
};
export default NotPublished;
