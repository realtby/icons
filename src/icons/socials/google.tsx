import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Google = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 25 24" fill="none" {...props}>
      <path
        d="M20.58 12.17c0-.74-.06-1.28-.19-1.84h-8.42v3.33h4.95c-.1.83-.64 2.08-1.84 2.91l-.02.11 2.67 2.07.18.02a8.77 8.77 0 0 0 2.67-6.6z"
        fill="#4285F4"
      />
      <path
        d="M11.97 20.94c2.43 0 4.46-.8 5.94-2.17l-2.83-2.2c-.75.53-1.77.9-3.1.9a5.4 5.4 0 0 1-5.1-3.73l-.11.01L4 15.9l-.04.1a8.96 8.96 0 0 0 8.01 4.95z"
        fill="#34A853"
      />
      <path
        d="M6.87 13.74a5.52 5.52 0 0 1-.3-1.77c0-.62.11-1.22.3-1.77l-.01-.12-2.8-2.18-.1.04A8.98 8.98 0 0 0 3 11.97 9 9 0 0 0 3.96 16l2.91-2.26z"
        fill="#FBBC05"
      />
      <path
        d="M11.97 6.47a5 5 0 0 1 3.47 1.33l2.53-2.47a8.62 8.62 0 0 0-6-2.33 8.96 8.96 0 0 0-8 4.94l2.9 2.25a5.42 5.42 0 0 1 5.1-3.72z"
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
