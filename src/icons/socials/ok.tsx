import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Ok = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 25 24" {...props}>
      <path d="M12 2a5 5 0 0 0-4.94 5.04A5 5 0 0 0 12 12.1a5 5 0 0 0 4.95-5.04A5 5 0 0 0 12 2zm0 7.56a2.49 2.49 0 0 1-2.46-2.51c0-1.4 1.1-2.52 2.46-2.52a2.49 2.49 0 0 1 2.47 2.52c0 1.38-1.1 2.51-2.47 2.51z" />
      <path d="M19.29 12.86a1.66 1.66 0 0 0-2.29-.65 9.38 9.38 0 0 1-10 0 1.66 1.66 0 0 0-2.28.65 1.73 1.73 0 0 0 .64 2.34 14.7 14.7 0 0 0 3.51 1.46L6.49 19.1a1.73 1.73 0 0 0 0 2.41 1.65 1.65 0 0 0 2.36 0L12 18.28l3.16 3.22a1.65 1.65 0 0 0 2.36 0 1.73 1.73 0 0 0 0-2.4l-2.38-2.44a14.69 14.69 0 0 0 3.5-1.46 1.73 1.73 0 0 0 .65-2.34z" />
    </svg>
  );
};

Ok.defaultProps = {
  height: 16,
  width: 16,
};
export default Ok;
