import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Report = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M7.496 6h9m-9 4h9m-9 8h6m-6-4h9m-10 9.5h11a3 3 0 0 0 3-3v-17a3 3 0 0 0-3-3h-11a3 3 0 0 0-3 3v17a3 3 0 0 0 3 3Z"
        stroke="#1D2126"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
};

Report.defaultProps = {
  height: 16,
  width: 16,
};
export default Report;
