import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const ServiceInfo = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 19 22" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.47 8.29c-.14.05-.35.18-.55.49a.5.5 0 1 1-.83-.56c.3-.44.65-.74 1.06-.88.4-.14.82-.1 1.16.1.7.4.97 1.3.67 2.22a8.6 8.6 0 0 1-.88 1.8c-.17.3-.32.58-.44.84-.17.36-.24.62-.22.8 0 .14.07.3.34.48.13.09.33.12.61.03a1.92 1.92 0 0 0 .76-.46.5.5 0 0 1 .7.7 2.94 2.94 0 0 1-1.16.71c-.45.14-1 .17-1.46-.14a1.61 1.61 0 0 1-.8-1.24c-.03-.45.13-.9.32-1.3.14-.3.32-.62.5-.94l.18-.32c.24-.43.46-.85.6-1.28.2-.58-.03-.93-.21-1.03a.4.4 0 0 0-.35-.02z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1.5A1.5 1.5 0 0 1 1.5 0h15A1.5 1.5 0 0 1 18 1.5v15a1.5 1.5 0 0 1-1.5 1.5h-14a1.5 1.5 0 0 0 0 3h13a1.5 1.5 0 0 0 1.5-1.5s0-.5.5-.5.5.5.5.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 0 19.5v-18zm1 16a2.49 2.49 0 0 1 1.5-.5h14a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5h-15a.5.5 0 0 0-.5.5v16z"
      />
      <path d="M10.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
    </svg>
  );
};

ServiceInfo.defaultProps = {
  height: 16,
  width: 16,
};
export default ServiceInfo;
