import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Read = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 15 12" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.76.44a.76.76 0 0 1 .05 1.06l-8.9 10a.74.74 0 0 1-1.09 0L.2 7.55a.76.76 0 0 1 .04-1.06.73.73 0 0 1 1.05.04L4.36 9.9 12.71.5a.73.73 0 0 1 1.05-.05zm0 5.34a.76.76 0 0 1 .05 1.06L9.66 11.5a.74.74 0 0 1-1.1 0l-.9-.98a.76.76 0 0 1 .04-1.06.73.73 0 0 1 1.05.04l.35.39 3.61-4.06a.73.73 0 0 1 1.05-.05z"
      />
    </svg>
  );
};

Read.defaultProps = {
  height: 16,
  width: 16,
};
export default Read;
