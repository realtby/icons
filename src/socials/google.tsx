import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Google = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M20.583 12.168c0-.737-.06-1.275-.19-1.833h-8.42v3.328h4.943c-.1.827-.638 2.073-1.834 2.91l-.017.111 2.663 2.063.184.019c1.694-1.565 2.671-3.867 2.671-6.598z"
        fill="#4285F4"
      />
      <path
        d="M11.973 20.938c2.422 0 4.455-.797 5.94-2.172l-2.83-2.193c-.758.528-1.774.897-3.11.897-2.371 0-4.384-1.564-5.102-3.727l-.105.009-2.769 2.143-.036.1a8.963 8.963 0 008.012 4.943z"
        fill="#34A853"
      />
      <path
        d="M6.872 13.743a5.522 5.522 0 01-.3-1.774c0-.618.11-1.216.29-1.774l-.005-.119L4.053 7.9l-.091.044a8.978 8.978 0 00-.957 4.026c0 1.445.349 2.81.957 4.026l2.91-2.252z"
        fill="#FBBC05"
      />
      <path
        d="M11.973 6.468c1.684 0 2.82.728 3.468 1.335l2.532-2.471C16.418 3.887 14.395 3 11.973 3a8.963 8.963 0 00-8.012 4.943l2.9 2.252c.727-2.162 2.74-3.727 5.112-3.727z"
        fill="#EB4335"
      />
    </svg>
  );
};

Google.defaultProps = {
  height: 16,
  width: 16,
};
export default Google;
