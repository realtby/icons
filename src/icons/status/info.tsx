import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Info = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.003 22c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10Zm1-14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 2a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1Z"
      />
    </svg>
  );
};

Info.defaultProps = {
  height: 24,
  width: 24,
};
export default Info;
