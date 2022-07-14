import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const CloseBtn = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 24 24" strokeWidth={1.2} stroke="#1D2126" {...props}>
      <path d="M4.5 19.5 12 12m0 0 7.5-7.5M12 12l7.5 7.5M12 12 4.5 4.5" strokeLinecap="round" />
    </svg>
  );
};

CloseBtn.defaultProps = {
  height: 24,
  width: 24,
};
export default CloseBtn;
