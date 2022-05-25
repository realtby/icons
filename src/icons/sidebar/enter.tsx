import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Enter = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 24 22" fill="none" {...props}>
      <path
        clipRule="evenodd"
        d="M23.003 1.5a1.5 1.5 0 0 0-1.5-1.5h-15a1.5 1.5 0 0 0-1.5 1.5v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5v19a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 0-1 0v4a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5v-19ZM10.296 7.146a.5.5 0 0 1 .707 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.707-.708L12.442 11H.65a.5.5 0 0 1 0-1h11.793l-2.146-2.146a.5.5 0 0 1 0-.708Z"
      />
    </svg>
  );
};

Enter.defaultProps = {
  height: 16,
  width: 16,
};
export default Enter;
