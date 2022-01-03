import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const LabelSort = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 8 10" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4.356.146a.5.5 0 00-.707 0l-3 3A.5.5 0 001.003 4h6a.5.5 0 00.353-.854l-3-3zM1.003 6a.5.5 0 00-.354.854l3 3a.5.5 0 00.707 0l3-3A.5.5 0 007.003 6h-6z" />
    </svg>
  );
};

LabelSort.defaultProps = {
  height: 16,
  width: 16,
};
export default LabelSort;
