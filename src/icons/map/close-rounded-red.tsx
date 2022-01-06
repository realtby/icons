import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const CloseRoundedRed = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 25 24" {...props}>
      <path d="M0 12a12 12 0 1 1 24 0 12 12 0 0 1-24 0z" fill="#E94649" />
      <path
        d="M16.76 8.42a.83.83 0 0 0-1.18-1.18L12 10.82 8.43 7.24a.83.83 0 1 0-1.18 1.18L10.82 12l-3.57 3.58a.83.83 0 1 0 1.18 1.18L12 13.18l3.58 3.58a.83.83 0 1 0 1.18-1.18L13.18 12l3.58-3.58z"
        fill="#fff"
      />
    </svg>
  );
};

CloseRoundedRed.defaultProps = {
  height: 16,
  width: 16,
};
export default CloseRoundedRed;
