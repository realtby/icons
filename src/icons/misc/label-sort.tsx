import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const LabelSort = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 8 10" {...props}>
      <path d="M4.36.15a.5.5 0 0 0-.71 0l-3 3A.5.5 0 0 0 1 4h6a.5.5 0 0 0 .36-.85l-3-3zM1 6a.5.5 0 0 0-.35.85l3 3a.5.5 0 0 0 .7 0l3-3A.5.5 0 0 0 7 6H1z" />
    </svg>
  );
};

LabelSort.defaultProps = {
  height: 16,
  width: 16,
};
export default LabelSort;
