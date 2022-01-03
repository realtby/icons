import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Whatsapp = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.006 12.002C.005 5.378 5.373.008 11.996.006A11.993 11.993 0 0118.35 1.82c5.622 3.502 7.34 10.898 3.84 16.52-3.502 5.623-10.899 7.342-16.52 3.84L.67 23.963a.485.485 0 01-.348-.004.5.5 0 01-.286-.646l1.865-4.842a11.993 11.993 0 01-1.896-6.47zm15.717 1.047c.767.4 1.991 1 1.991 1a.5.5 0 01.28.449v1a3.011 3.011 0 01-3 2.498c-1.57 0-4.583-1.877-5.85-3.145C7.878 13.584 6 10.57 6 9.001A3.011 3.011 0 018.5 6.003h1a.5.5 0 01.445.275s.604 1.224 1 1.991c.444.868-.39 1.886-.866 2.367.286.747.72 1.429 1.273 2.006.577.553 1.26.986 2.006 1.273.48-.476 1.499-1.312 2.366-.865z"
      />
    </svg>
  );
};

Whatsapp.defaultProps = {
  height: 16,
  width: 16,
};
export default Whatsapp;
