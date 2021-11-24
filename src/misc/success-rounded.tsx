import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const SuccessRounded = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M33.648 18.469a1.5 1.5 0 10-2.29-1.938L21.32 28.395l-4.857-4.047a1.5 1.5 0 10-1.92 2.304l6 5a1.5 1.5 0 002.105-.183l11-13z"
        fill="#1D2126"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.003 24c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24zm-3 0c0 11.598-9.402 21-21 21s-21-9.402-21-21 9.402-21 21-21 21 9.402 21 21z"
        fill="#1D2126"
      />
    </svg>
  );
};

SuccessRounded.defaultProps = {
  height: 16,
  width: 16,
};
export default SuccessRounded;
