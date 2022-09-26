import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const CloserRoundedWithBorder = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg fill="none" {...props}>
      <rect x={0.753} y={0.75} rx={13.25} fill="#fff" />
      <path
        d="M18.759 10.423a.833.833 0 0 0-1.179-1.179l-3.577 3.578-3.578-3.578a.833.833 0 1 0-1.178 1.179L12.824 14l-3.577 3.577a.833.833 0 1 0 1.178 1.179l3.578-3.578 3.577 3.578a.833.833 0 1 0 1.179-1.179L15.18 14l3.578-3.577Z"
        fill="#1D2126"
      />
      <rect x={0.753} y={0.75} rx={13.25} stroke="#1D2126" strokeWidth={1.5} />
    </svg>
  );
};

CloserRoundedWithBorder.defaultProps = {
  height: 16,
  width: 16,
};
export default CloserRoundedWithBorder;
