import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Alert = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);
  return (
    <svg viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.18.713c-.481-.95-1.837-.95-2.32-.002L.669 16.82A1.5 1.5 0 002.005 19H18a1.5 1.5 0 001.338-2.176L11.18.713zm-1.428.45a.3.3 0 01.535 0l8.159 16.112a.5.5 0 01-.446.726H2.005a.5.5 0 01-.446-.727l8.193-16.11zm-.385 5.6a.9.9 0 011.536.637v4.8a.9.9 0 11-1.8 0V7.4a.9.9 0 01.264-.636zm0 7.2a.9.9 0 111.272 1.273.9.9 0 01-1.272-1.272z"
        fill="#1D2126"
      />
    </svg>
  );
};

Alert.defaultProps = {
  height: 16,
  width: 16,
};
export default Alert;
