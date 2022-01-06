import * as React from 'react';
import type { IconProps } from '../../../core';
import { castIconProps } from '../../../core';

const Update = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 11 10" {...props}>
      <path d="m1.12 1.92-.18-.78A.47.47 0 0 0 .45.76a.48.48 0 0 0-.43.6l.47 2.01c.06.26.31.42.57.36L3 3.25c.62-.15.4-1.1-.22-.95l-.93.24A3.98 3.98 0 0 1 4.57.98a4.06 4.06 0 0 1 4.45 3.69c.05.67 1.03.56.94-.1A5.08 5.08 0 0 0 4.73 0a5.04 5.04 0 0 0-3.61 1.92zm5.87 4.82c-.64.13-.4 1.12.22.94l.94-.23A3.98 3.98 0 0 1 5.42 9 4.06 4.06 0 0 1 .98 5.32a.48.48 0 0 0-.48-.44.48.48 0 0 0-.46.54 5.02 5.02 0 0 0 5.48 4.55 4.93 4.93 0 0 0 3.36-1.9l.18.77c.12.68 1.11.44.92-.22l-.47-2a.47.47 0 0 0-.53-.37l-1.99.49z" />
    </svg>
  );
};

Update.defaultProps = {
  height: 16,
  width: 16,
};
export default Update;
