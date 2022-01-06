import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Camera = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 14" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.78.83A1.5 1.5 0 0 1 6.12 0h3.76a1.5 1.5 0 0 1 1.34.83l.6 1.17h2.68A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h2.7L4.78.83zM6.12 1a.5.5 0 0 0-.45.28l-.72 1.44A.5.5 0 0 1 4.5 3h-3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.44-.28l-.73-1.44A.5.5 0 0 0 9.88 1H6.13z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
      />
    </svg>
  );
};

Camera.defaultProps = {
  height: 16,
  width: 16,
};
export default Camera;
