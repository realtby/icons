import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const LockClose = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 15 16" {...props}>
      <path d="M2.5 7.5H2a.5.5 0 0 0 .5.5v-.5zm2 0V8a.5.5 0 0 0 .5-.5h-.5zm6.78-4.45a.5.5 0 1 0 .45.9l-.45-.9zm2.45-.1a.5.5 0 1 0-.45-.9l.45.9zm-.45 4a.5.5 0 1 0 .45-.9l-.45.9zm-1.55-1.9a.5.5 0 1 0-.45.9l.45-.9zM6.5 12.5a.5.5 0 1 0-1 0h1zm-1 1a.5.5 0 0 0 1 0h-1zM1.5 8h9V7h-9v1zm9.5.5v6h1v-6h-1zm-.5 6.5h-9v1h9v-1zM1 14.5v-6H0v6h1zm.5.5a.5.5 0 0 1-.5-.5H0A1.5 1.5 0 0 0 1.5 16v-1zm9.5-.5a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5h-1zM10.5 8a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 10.5 7v1zm-9-1A1.5 1.5 0 0 0 0 8.5h1a.5.5 0 0 1 .5-.5V7zm1.5.5V4H2v3.5h1zM9 4v.5h1V4H9zm-1 .5V4H7v.5h1zM4 4v3.5h1V4H4zM2.5 8h2V7h-2v1zM6 2a2 2 0 0 0-2 2h1a1 1 0 0 1 1-1V2zm2 2a2 2 0 0 0-2-2v1a1 1 0 0 1 1 1h1zm.5 1a.5.5 0 0 1-.5-.5H7A1.5 1.5 0 0 0 8.5 6V5zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 10 4.5H9zM6 1a3 3 0 0 1 3 3h1a4 4 0 0 0-4-4v1zM3 4a3 3 0 0 1 3-3V0a4 4 0 0 0-4 4h1zm8.73-.05 2-1-.45-.9-2 1 .45.9zm2 2.1-2-1-.45.9 2 1 .45-.9zM7 11a1 1 0 0 1-1 1v1a2 2 0 0 0 2-2H7zm-1 1a1 1 0 0 1-1-1H4a2 2 0 0 0 2 2v-1zm-1-1a1 1 0 0 1 1-1V9a2 2 0 0 0-2 2h1zm1-1a1 1 0 0 1 1 1h1a2 2 0 0 0-2-2v1zm-.5 2.5v1h1v-1h-1z" />
    </svg>
  );
};

LockClose.defaultProps = {
  height: 16,
  width: 16,
};
export default LockClose;
