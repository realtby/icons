import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Price = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 25 24" {...props}>
      <path d="M12.73 9.55a.74.74 0 1 1 1.48 0v.24h.24a.74.74 0 0 1 0 1.48h-.98c-.53 0-.84.11-1 .23-.13.09-.22.22-.22.5s.1.41.22.5c.16.12.47.23 1 .23.7 0 1.36.14 1.87.5.55.4.83 1 .83 1.7s-.28 1.3-.83 1.7c-.32.25-.71.39-1.13.46v.3a.74.74 0 0 1-1.48 0v-.24h-1.22a.74.74 0 0 1 0-1.48h1.96c.53 0 .84-.11 1-.23.13-.09.22-.22.22-.5s-.09-.41-.22-.5c-.16-.12-.47-.23-1-.23-.7 0-1.36-.14-1.87-.51-.55-.4-.83-1-.83-1.7s.28-1.3.83-1.7c.33-.24.72-.38 1.13-.45v-.3z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zm-1.5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 .74A.74.74 0 0 1 .74 0h8.43c.43 0 .85.16 1.17.46l13.43 12.47a.74.74 0 0 1 .04 1.03L15 23.76a.74.74 0 0 1-1.05.04L.55 11.36A1.72 1.72 0 0 1 0 10.1V.74zm1.48.74v8.62c0 .07.03.13.08.18l12.47 11.58a.5.5 0 0 0 .71-.03l7.16-7.95a.5.5 0 0 0-.03-.7L9.33 1.54a.24.24 0 0 0-.16-.06H1.48z"
      />
    </svg>
  );
};

Price.defaultProps = {
  height: 16,
  width: 16,
};
export default Price;
