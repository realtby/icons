import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const ArrowBack = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 11 18" {...props}>
      <path d="M9.71 1.707A1 1 0 1 0 8.296.293L9.71 1.707ZM1.003 9l-.707-.707a1 1 0 0 0 0 1.414L1.003 9Zm7.293 8.707a1 1 0 0 0 1.414-1.414l-1.414 1.414Zm0-17.414-8 8L1.71 9.707l8-8L8.296.293Zm-8 9.414 8 8 1.414-1.414-8-8L.296 9.707Z" />
    </svg>
  );
};

ArrowBack.defaultProps = {
  height: 16,
  width: 16,
};
export default ArrowBack;
