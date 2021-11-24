import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Sort = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.503 0a.5.5 0 01.5.5v11.793l2.146-2.147a.5.5 0 01.707.708l-3 3a.5.5 0 01-.707 0l-3-3a.5.5 0 01.707-.708l2.147 2.147V.5a.5.5 0 01.5-.5zm8.646.146a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708l-2.146-2.147V13.5a.5.5 0 11-1 0V1.707L9.856 3.854a.5.5 0 11-.707-.708l3-3z"
        fill="#000"
      />
    </svg>
  );
};

Sort.defaultProps = {
  height: 16,
  width: 16,
};
export default Sort;
