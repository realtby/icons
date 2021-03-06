import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const InstagramNoFill = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 25 24" {...props}>
      <path d="M15.75 2h-7.5A6.25 6.25 0 0 0 2 8.25v7.5A6.25 6.25 0 0 0 8.25 22h7.5A6.25 6.25 0 0 0 22 15.75v-7.5A6.25 6.25 0 0 0 15.75 2zm4.38 13.75a4.38 4.38 0 0 1-4.38 4.38h-7.5a4.38 4.38 0 0 1-4.37-4.38v-7.5a4.38 4.38 0 0 1 4.37-4.38h7.5a4.38 4.38 0 0 1 4.38 4.38v7.5z" />
      <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.13A3.13 3.13 0 0 1 8.88 12 3.13 3.13 0 0 1 12 8.87 3.13 3.13 0 0 1 15.13 12 3.13 3.13 0 0 1 12 15.13zM17.38 7.3a.67.67 0 1 0 0-1.34.67.67 0 0 0 0 1.33z" />
    </svg>
  );
};

InstagramNoFill.defaultProps = {
  height: 16,
  width: 16,
};
export default InstagramNoFill;
