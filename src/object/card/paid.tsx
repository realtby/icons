import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Paid = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.003 5a5 5 0 11-10 0 5 5 0 0110 0zm-1 0a4 4 0 11-1.029-2.678l-3.471 3.47-1.647-1.646a.5.5 0 10-.707.708l2 2a.5.5 0 00.707 0l3.698-3.698c.287.552.449 1.18.449 1.844z"
        fill="#000"
      />
    </svg>
  );
};

Paid.defaultProps = {
  height: 16,
  width: 16,
};
export default Paid;
