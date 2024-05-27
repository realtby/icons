import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const FlameFill = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 12 16" {...props}>
      <path d="M9.568 14.51c.936-.766 1.457-1.585 1.92-2.55.603-1.233.597-2.214.372-3.333-.232-1.12-.769-2.177-1.524-3.085.028.394-.027.79-.164 1.164-.136.373-.662 2.622-1.583 3.088C8.59 2.554 5.08 0 5.08 0c.272 1.4.299 2.861 0 3.856-.297.995-.927 1.872-1.49 2.774-.563.908-.95 2.138-.984 3.164C2.301 9.266 1.54 8.44 1.341 7.85a3.077 3.077 0 0 1-.132-1.803A4.502 4.502 0 0 0 .116 8.285c-.166.87-.133 1.772-.033 2.643.132.964.397 1.966.96 2.774.663.964 1.722 1.648 2.888 2.022 2.99.671 4.08.062 5.637-1.213Z" />
    </svg>
  );
};

FlameFill.defaultProps = {
  height: 16,
  width: 12,
};
export default FlameFill;
