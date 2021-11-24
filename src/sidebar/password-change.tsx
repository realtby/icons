import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const PasswordChange = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.003 3.5a3.5 3.5 0 117 0V7h1.5a1.5 1.5 0 011.5 1.5v1a.5.5 0 11-1 0v-1a.5.5 0 00-.5-.5h-10a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h8a.5.5 0 010 1h-8a1.5 1.5 0 01-1.5-1.5v-9a1.5 1.5 0 011.5-1.5h1.5V3.5zm1 3.5h5V3.5a2.5 2.5 0 00-5 0V7zm13.5 6c-2.079 0-3.5 1.554-3.5 3.5a.5.5 0 11-1 0c0-2.472 1.843-4.5 4.5-4.5 1.24 0 2.547.448 3.5 1.211V12.5a.5.5 0 011 0v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1h.884c-.752-.606-1.828-1-2.884-1zm4 4a.5.5 0 01.5.5c0 2.472-1.843 4.5-4.5 4.5-1.24 0-2.547-.448-3.5-1.211v.711a.5.5 0 11-1 0v-2a.5.5 0 01.5-.5h2a.5.5 0 110 1h-.884c.752.606 1.828 1 2.884 1 2.078 0 3.5-1.554 3.5-3.5a.5.5 0 01.5-.5z"
        fill="#000"
      />
    </svg>
  );
};

PasswordChange.defaultProps = {
  height: 16,
  width: 16,
};
export default PasswordChange;
