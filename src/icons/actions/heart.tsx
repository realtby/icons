import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Heart = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M21.847 4.257c-3.252-3.933-9.844 2.621-9.844 2.621S5.41.324 2.158 4.257C-3.235 10.777 12.003 21 12.003 21S27.24 10.776 21.847 4.257Z" />
    </svg>
  );
};

Heart.defaultProps = {
  height: 24,
  width: 24,
};
export default Heart;
