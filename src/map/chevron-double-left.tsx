import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const ChevronDoubleLeft = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M9.71 1.707A1 1 0 108.296.293L9.71 1.707zM1.003 9l-.707-.707a1 1 0 000 1.414L1.003 9zm7.293 8.707a1 1 0 001.414-1.414l-1.414 1.414zm9.414-16A1 1 0 1016.296.293l1.414 1.414zM9.003 9l-.707-.707a1 1 0 000 1.414L9.003 9zm7.293 8.707a1 1 0 001.414-1.414l-1.414 1.414zm-8-17.414l-8 8L1.71 9.707l8-8L8.296.293zm-8 9.414l8 8 1.414-1.414-8-8L.296 9.707zm16-9.414l-8 8L9.71 9.707l8-8L16.296.293zm-8 9.414l8 8 1.414-1.414-8-8-1.414 1.414z" />
    </svg>
  );
};

ChevronDoubleLeft.defaultProps = {
  height: 16,
  width: 16,
};
export default ChevronDoubleLeft;
