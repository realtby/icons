import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Complain = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 12 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.06 3.06c-.33.1-.7.19-1.06.19-.53 0-1.16-.04-1.74-.13a9.02 9.02 0 0 1-.5-.1v4.46A10.4 10.4 0 0 0 4 7.75c.13 0 .33-.04.6-.12.23-.07.46-.16.73-.26l.22-.08A7.27 7.27 0 0 1 8 6.75c.84 0 1.53.14 2.06.27l.2.05V2.5A7.32 7.32 0 0 0 8 2.25c-.6 0-1.23.2-1.93.46l-.2.07-.81.28zm-3.3 5.96.5.1c.58.09 1.2.13 1.74.13.36 0 .73-.09 1.06-.19l.82-.28.2-.07A5.58 5.58 0 0 1 8 8.25c.67 0 1.23.11 1.7.23l.34.09h.02l.3.08c.18.05.41.1.64.1a.75.75 0 0 0 .75-.75V2a.75.75 0 0 0-.41-.67A7.17 7.17 0 0 0 8 .75c-.9 0-1.76.3-2.44.55l-.22.07-.72.26c-.28.08-.48.12-.62.12-.46 0-1-.04-1.5-.12a4.3 4.3 0 0 1-1.16-.3A.75.75 0 0 0 .25 2v13a.75.75 0 0 0 1.5 0V9.02z"
      />
    </svg>
  );
};

Complain.defaultProps = {
  height: 16,
  width: 16,
};
export default Complain;
