import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Exchange = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M5.75 21a.75.75 0 0 0 1.5 0h-1.5ZM7.03 2.47a.75.75 0 0 0-1.06 0L1.197 7.243a.75.75 0 1 0 1.06 1.06L6.5 4.061l4.243 4.242a.75.75 0 0 0 1.06-1.06L7.03 2.47ZM7.25 21V3h-1.5v18h1.5ZM16.75 3a.75.75 0 0 1 1.5 0h-1.5Zm1.28 18.53a.75.75 0 0 1-1.06 0l-4.773-4.773a.75.75 0 0 1 1.06-1.06l4.243 4.242 4.243-4.242a.75.75 0 0 1 1.06 1.06L18.03 21.53ZM18.25 3v18h-1.5V3h1.5Z" />
    </svg>
  );
};

Exchange.defaultProps = {
  height: 16,
  width: 16,
};
export default Exchange;
