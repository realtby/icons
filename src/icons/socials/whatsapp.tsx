import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Whatsapp = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 22 22" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.006 11.002C.005 4.93 4.926.007 10.997.006a10.993 10.993 0 0 1 5.823 1.662c5.154 3.21 6.73 9.99 3.52 15.143-3.21 5.154-9.99 6.73-15.144 3.52l-4.58 1.635a.444.444 0 0 1-.32-.004.458.458 0 0 1-.262-.592l1.71-4.438a10.994 10.994 0 0 1-1.738-5.93Zm14.407.96c.703.367 1.825.916 1.825.916a.458.458 0 0 1 .256.412v.916a2.76 2.76 0 0 1-2.748 2.29c-1.44 0-4.203-1.72-5.363-2.882C7.222 12.452 5.5 9.689 5.5 8.25a2.76 2.76 0 0 1 2.29-2.748h.917c.173 0 .33.097.408.251 0 0 .555 1.123.916 1.826.408.795-.357 1.729-.793 2.17.263.684.66 1.31 1.167 1.838.53.508 1.155.905 1.839 1.168.44-.437 1.374-1.203 2.17-.794Z"
      />
    </svg>
  );
};

Whatsapp.defaultProps = {
  height: 22,
  width: 22,
};
export default Whatsapp;
