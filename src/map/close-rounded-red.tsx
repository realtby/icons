import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const CloseRoundedRed = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M.003 12c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12-12-5.373-12-12z"
        fill="#E94649"
      />
      <path
        d="M16.759 8.423a.833.833 0 00-1.179-1.179l-3.577 3.578-3.577-3.578a.833.833 0 10-1.179 1.179L10.824 12l-3.577 3.577a.833.833 0 101.179 1.179l3.577-3.578 3.577 3.578a.833.833 0 101.179-1.179L13.18 12l3.578-3.577z"
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
