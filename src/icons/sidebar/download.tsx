import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Download = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 23 18" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m7.964 11.172 3.182 3.182a.5.5 0 0 0 .708 0l3.182-3.182a.5.5 0 1 0-.708-.708L12 12.793V1a.5.5 0 0 0-1 0v11.793l-2.328-2.329a.5.5 0 1 0-.708.708Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 13.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h19a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 1 0v3a1.5 1.5 0 0 1-1.5 1.5H2A1.5 1.5 0 0 1 .5 17v-3a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  );
};

Download.defaultProps = {
  height: 16,
  width: 16,
};
export default Download;
