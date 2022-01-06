import * as React from 'react';
import type { IconProps } from '../../../core';
import { castIconProps } from '../../../core';

const Sort = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 14" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 0a.5.5 0 0 1 .5.5v11.8l2.15-2.15a.5.5 0 0 1 .7.7l-3 3a.5.5 0 0 1-.7 0l-3-3a.5.5 0 0 1 .7-.7L3 12.29V.5a.5.5 0 0 1 .5-.5zm8.65.15a.5.5 0 0 1 .7 0l3 3a.5.5 0 0 1-.7.7L13 1.71V13.5a.5.5 0 1 1-1 0V1.7L9.86 3.86a.5.5 0 1 1-.71-.7l3-3z"
      />
    </svg>
  );
};

Sort.defaultProps = {
  height: 16,
  width: 16,
};
export default Sort;
