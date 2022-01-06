import * as React from 'react';
import type { IconProps } from '../../../core';
import { castIconProps } from '../../../core';

const Currency = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 5A5 5 0 1 1 6 5a5 5 0 0 1 10 0zm-3.03 2.83a.21.21 0 0 0 .03-.12l-.11-.6a.2.2 0 0 0-.07-.1c-.04-.03-.08-.03-.12-.03-.2.06-.38.08-.56.08-.35 0-.66-.1-.94-.3a1.8 1.8 0 0 1-.58-.85h1.42c.03 0 .06 0 .09-.03a.2.2 0 0 0 .06-.09l.08-.38a.24.24 0 0 0-.04-.13.13.13 0 0 0-.12-.07h-1.67a2.12 2.12 0 0 1 0-.56h1.84a.13.13 0 0 0 .08-.04c.03-.03.05-.05.07-.1l.07-.38a.24.24 0 0 0-.04-.13.13.13 0 0 0-.1-.07h-1.73a1.53 1.53 0 0 1 1.47-1c.13 0 .28.02.44.04h.04c.02.02.06.02.1 0a.37.37 0 0 0 .07-.11l.15-.6c0-.03 0-.07-.02-.11a.2.2 0 0 0-.1-.08 3.8 3.8 0 0 0-.65-.07c-.6 0-1.14.19-1.6.54a2.79 2.79 0 0 0-.97 1.39h-.4a.15.15 0 0 0-.16.16v.4c0 .05.01.1.04.12.02.03.06.04.11.04h.28c-.03.2-.03.4-.02.56h-.26a.15.15 0 0 0-.15.16v.38c0 .05.01.1.04.12.02.03.06.04.11.04h.38a2.66 2.66 0 0 0 3.36 1.98c.02 0 .05-.02.07-.06z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.09 6H5a5 5 0 1 0 5 4.92A6 6 0 0 1 5.08 6zm1.5 5.61a1.68 1.68 0 0 0-.68-.42l-1.5-.43a.37.37 0 0 1-.2-.15.37.37 0 0 1-.09-.23c0-.11.03-.2.11-.29a.4.4 0 0 1 .3-.12h.93a.84.84 0 0 1 .47.15.16.16 0 0 0 .14.03c.05 0 .1-.03.14-.06l.47-.48a.2.2 0 0 0 .07-.16.34.34 0 0 0-.1-.17 1.92 1.92 0 0 0-1.2-.4v-.66a.22.22 0 0 0-.06-.15.23.23 0 0 0-.16-.07H4.8a.23.23 0 0 0-.17.07.2.2 0 0 0-.05.15v.65h-.03c-.3 0-.57.09-.8.24-.26.15-.44.35-.56.6a1.35 1.35 0 0 0-.17.8c.03.32.15.6.38.83a1.5 1.5 0 0 0 .79.49l1.43.4a.45.45 0 0 1 .2.16.4.4 0 0 1-.03.53.36.36 0 0 1-.28.11h-.93a.8.8 0 0 1-.48-.13.32.32 0 0 0-.15-.05c-.05.02-.1.03-.12.06l-.48.46c-.05.06-.08.13-.07.18 0 .07.03.12.09.16.36.28.76.41 1.2.41v.66c0 .07.02.12.06.17.04.04.1.05.17.05h.44a.21.21 0 0 0 .23-.22v-.65c.33 0 .62-.1.9-.28a1.48 1.48 0 0 0 .57-.72c.08-.28.1-.54.04-.81a1.42 1.42 0 0 0-.37-.71z"
      />
    </svg>
  );
};

Currency.defaultProps = {
  height: 16,
  width: 16,
};
export default Currency;
