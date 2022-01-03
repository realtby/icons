import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Camera = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.78.83A1.5 1.5 0 016.12 0h3.764a1.5 1.5 0 011.341.83L11.813 2h2.69a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5h-13a1.5 1.5 0 01-1.5-1.5v-9a1.5 1.5 0 011.5-1.5h2.692L4.779.83zM6.12 1a.5.5 0 00-.447.276L4.95 2.724A.5.5 0 014.503 3h-3a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5h-3a.5.5 0 01-.447-.276l-.724-1.448A.5.5 0 009.885 1H6.12z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.003 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM4.503 8a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z"
      />
    </svg>
  );
};

Camera.defaultProps = {
  height: 16,
  width: 16,
};
export default Camera;
