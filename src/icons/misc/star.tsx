import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Star = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" {...props}>
      <path d="M7.32.46a.74.74 0 0 1 1.37 0l1.8 4.07a.76.76 0 0 0 .59.46l4.26.52c.64.08.9.9.42 1.37l-3.15 3.04a.81.81 0 0 0-.22.74l.83 4.4c.13.66-.55 1.17-1.1.84l-3.75-2.2a.72.72 0 0 0-.73 0l-3.75 2.2c-.56.33-1.23-.18-1.1-.84l.83-4.4a.81.81 0 0 0-.23-.74L.25 6.88C-.23 6.42.03 5.59.67 5.5L4.93 5a.76.76 0 0 0 .6-.46L7.31.46z" />
    </svg>
  );
};

Star.defaultProps = {
  height: 16,
  width: 16,
};
export default Star;
