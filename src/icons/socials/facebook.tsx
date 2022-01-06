import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Facebook = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 25 24" {...props}>
      <path d="M15.89 11.99H13.3V22H9.36V11.99H7.5V8.47h1.86V6.18c0-1.63.75-4.18 3.98-4.18h2.91v3.42h-2.11c-.35 0-.84.19-.84.96v2.08h2.94l-.34 3.52h-.01z" />
    </svg>
  );
};

Facebook.defaultProps = {
  height: 16,
  width: 16,
};
export default Facebook;
