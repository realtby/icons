import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Alert = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 20 19" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.18.71a1.3 1.3 0 0 0-2.32 0L.66 16.82A1.5 1.5 0 0 0 2 19h16a1.5 1.5 0 0 0 1.34-2.18L11.18.72zm-1.43.45a.3.3 0 0 1 .54 0l8.16 16.11A.5.5 0 0 1 18 18H2a.5.5 0 0 1-.44-.73l8.2-16.1zm-.38 5.6a.9.9 0 0 1 1.53.64v4.8a.9.9 0 1 1-1.8 0V7.4a.9.9 0 0 1 .27-.64zm0 7.2a.9.9 0 1 1 1.27 1.28.9.9 0 0 1-1.27-1.28z"
      />
    </svg>
  );
};

Alert.defaultProps = {
  height: 16,
  width: 16,
};
export default Alert;