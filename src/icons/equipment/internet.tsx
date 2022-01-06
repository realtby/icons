import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Internet = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 23 24" {...props}>
      <path d="M21.5 23.5v.5a.5.5 0 0 0 .5-.5h-.5zm-21 0H0a.5.5 0 0 0 .5.5v-.5zm10-5a.5.5 0 0 0 1 0h-1zM5.86 1.35a.5.5 0 1 0-.71-.7l.7.7zm-.71 8a.5.5 0 1 0 .7-.7l-.7.7zm2.7-6a.5.5 0 1 0-.7-.7l.7.7zm-.7 4a.5.5 0 1 0 .7-.7l-.7.7zm7.7-4.7a.5.5 0 1 0-.7.7l.7-.7zm-.7 4a.5.5 0 1 0 .7.7l-.7-.7zm2.7-6a.5.5 0 1 0-.7.7l.7-.7zm-.7 8a.5.5 0 1 0 .7.7l-.7-.7zM8.5 21.5a.5.5 0 0 0 0-1v1zm0-1a.5.5 0 0 0 0 1v-1zm2.5 1a.5.5 0 1 0 0-1v1zm0-1a.5.5 0 0 0 0 1v-1zm2.5 1a.5.5 0 1 0 0-1v1zm0-1a.5.5 0 0 0 0 1v-1zM3.5 19h15v-1h-15v1zM21 21.5v2h1v-2h-1zm.5 1.5H.5v1h21v-1zM1 23.5v-2H0v2h1zM18.5 19a2.5 2.5 0 0 1 2.5 2.5h1a3.5 3.5 0 0 0-3.5-3.5v1zm-15-1A3.5 3.5 0 0 0 0 21.5h1A2.5 2.5 0 0 1 3.5 19v-1zm8 .5V7h-1v11.5h1zm1-13.5A1.5 1.5 0 0 1 11 6.5v1A2.5 2.5 0 0 0 13.5 5h-1zM11 6.5A1.5 1.5 0 0 1 9.5 5h-1A2.5 2.5 0 0 0 11 7.5v-1zM9.5 5A1.5 1.5 0 0 1 11 3.5v-1A2.5 2.5 0 0 0 8.5 5h1zM11 3.5A1.5 1.5 0 0 1 12.5 5h1A2.5 2.5 0 0 0 11 2.5v1zM5.14.65C4.66 1.13 3 2.77 3 5h1c0-1.77 1.34-3.13 1.86-3.65l-.71-.7zM3 5c0 2.23 1.66 3.87 2.15 4.35l.7-.7C5.36 8.13 4 6.77 4 5H3zm4.15-2.35a4.77 4.77 0 0 0-.7.92C6.22 3.97 6 4.47 6 5h1c0-.27.12-.6.31-.92.19-.32.4-.59.55-.73l-.71-.7zM6 5c0 .53.22 1.03.45 1.43.23.4.5.73.7.92l.7-.7a3.78 3.78 0 0 1-.54-.73 1.9 1.9 0 0 1-.3-.92H6zm8.15-1.65c.14.14.36.4.55.73.19.32.3.65.3.92h1c0-.53-.21-1.03-.44-1.43a4.76 4.76 0 0 0-.7-.92l-.71.7zM15 5c0 .27-.11.6-.3.92a3.78 3.78 0 0 1-.55.73l.7.7c.2-.2.48-.53.71-.92.23-.4.44-.9.44-1.43h-1zm1.15-3.65C16.66 1.87 18 3.23 18 5h1c0-2.23-1.66-3.87-2.14-4.35l-.71.7zM18 5c0 1.77-1.34 3.13-1.85 3.65l.7.7C17.36 8.87 19 7.23 19 5h-1zM8.51 20.5v1-1zm2.5 0v1-1zm2.5 0v1-1z" />
    </svg>
  );
};

Internet.defaultProps = {
  height: 16,
  width: 16,
};
export default Internet;
