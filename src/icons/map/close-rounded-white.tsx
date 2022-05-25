import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const CloseRoundedWhite = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" {...props}>
      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" fill="#fff" />
      <path
        d="M11.57 5.32a.63.63 0 1 0-.88-.89L8 7.12 5.32 4.43a.63.63 0 1 0-.88.89L7.12 8l-2.68 2.68a.63.63 0 1 0 .88.89L8 8.88l2.69 2.69a.63.63 0 0 0 .88-.89L8.89 8l2.68-2.68z"
        fill="#000"
      />
    </svg>
  );
};

CloseRoundedWhite.defaultProps = {
  height: 16,
  width: 16,
};
export default CloseRoundedWhite;
