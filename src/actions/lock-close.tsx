import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const LockClose = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M2.503 7.5h-.5a.5.5 0 00.5.5v-.5zm2 0V8a.5.5 0 00.5-.5h-.5zm6.776-4.447a.5.5 0 10.447.894l-.447-.894zm2.447-.106a.5.5 0 10-.447-.894l.447.894zm-.447 4a.5.5 0 10.447-.894l-.447.894zm-1.553-1.894a.5.5 0 10-.447.894l.447-.894zm-5.223 7.445a.5.5 0 10-1 0h1zm-1 1a.5.5 0 001 0h-1zM1.503 8h9V7h-9v1zm9.5.5v6h1v-6h-1zm-.5 6.5h-9v1h9v-1zm-9.5-.5v-6h-1v6h1zm.5.5a.5.5 0 01-.5-.5h-1a1.5 1.5 0 001.5 1.5v-1zm9.5-.5a.5.5 0 01-.5.5v1a1.5 1.5 0 001.5-1.5h-1zm-.5-6.5a.5.5 0 01.5.5h1a1.5 1.5 0 00-1.5-1.5v1zm-9-1a1.5 1.5 0 00-1.5 1.5h1a.5.5 0 01.5-.5V7zm1.5.5V4h-1v3.5h1zm6-3.5v.5h1V4h-1zm-1 .5V4h-1v.5h1zm-4-.5v3.5h1V4h-1zm-1.5 4h2V7h-2v1zm3.5-6a2 2 0 00-2 2h1a1 1 0 011-1V2zm2 2a2 2 0 00-2-2v1a1 1 0 011 1h1zm.5 1a.5.5 0 01-.5-.5h-1a1.5 1.5 0 001.5 1.5V5zm.5-.5a.5.5 0 01-.5.5v1a1.5 1.5 0 001.5-1.5h-1zm-3-3.5a3 3 0 013 3h1a4 4 0 00-4-4v1zm-3 3a3 3 0 013-3V0a4 4 0 00-4 4h1zm8.723-.053l2-1-.447-.894-2 1 .447.894zm2 2.106l-2-1-.447.894 2 1 .447-.894zM7.003 11a1 1 0 01-1 1v1a2 2 0 002-2h-1zm-1 1a1 1 0 01-1-1h-1a2 2 0 002 2v-1zm-1-1a1 1 0 011-1V9a2 2 0 00-2 2h1zm1-1a1 1 0 011 1h1a2 2 0 00-2-2v1zm-.5 2.498v1h1v-1h-1z"
        fill="#000"
      />
    </svg>
  );
};

LockClose.defaultProps = {
  height: 16,
  width: 16,
};
export default LockClose;
