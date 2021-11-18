import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Ok = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12.004 2C9.274 2 7.06 4.259 7.06 7.045c0 2.787 2.213 5.046 4.943 5.046 2.73 0 4.943-2.26 4.943-5.045C16.947 4.258 14.734 2 12.004 2zm0 7.56c-1.361 0-2.464-1.126-2.464-2.514 0-1.39 1.103-2.515 2.464-2.515 1.36 0 2.463 1.126 2.463 2.515 0 1.388-1.102 2.514-2.463 2.514z"
        fill="#FF9800"
      />
      <path
        d="M19.288 12.864a1.66 1.66 0 00-2.284-.657c-3.365 1.925-6.637 1.925-10.002 0a1.66 1.66 0 00-2.285.656 1.732 1.732 0 00.644 2.332 14.691 14.691 0 003.509 1.467l-2.382 2.43a1.728 1.728 0 000 2.41 1.645 1.645 0 002.36 0l3.155-3.221 3.155 3.22a1.645 1.645 0 002.36 0 1.728 1.728 0 000-2.408l-2.382-2.431a14.685 14.685 0 003.509-1.466 1.732 1.732 0 00.643-2.332z"
        fill="#FF9800"
      />
    </svg>
  );
};

Ok.defaultProps = {
  height: 16,
  width: 16,
};
export default Ok;
