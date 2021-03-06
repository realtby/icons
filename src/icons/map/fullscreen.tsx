import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Fullscreen = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 21 20" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.6 0h4.95a.6.6 0 1 1 0 1.19H2.03L7.95 7.1a.6.6 0 0 1-.84.83l-5.92-5.9v3.51a.6.6 0 0 1-1.19 0V.6A.6.6 0 0 1 .6 0zm13.26.6c0-.33.27-.6.6-.6h4.95c.33 0 .6.27.6.6v4.94a.6.6 0 1 1-1.2 0V2.03L12.9 7.95a.6.6 0 1 1-.84-.84l5.91-5.92h-3.51a.6.6 0 0 1-.6-.6zM7.95 12.05a.6.6 0 0 1 0 .83L2.03 18.8h3.52a.6.6 0 0 1 0 1.19H.6a.6.6 0 0 1-.6-.6v-4.94a.6.6 0 0 1 1.2 0v3.51l5.9-5.91a.6.6 0 0 1 .85 0zm4.1 0a.6.6 0 0 1 .85 0l5.91 5.91v-3.51a.6.6 0 0 1 1.2 0v4.95a.6.6 0 0 1-.6.59h-4.95a.6.6 0 0 1 0-1.19h3.51l-5.91-5.91a.6.6 0 0 1 0-.84z"
      />
    </svg>
  );
};

Fullscreen.defaultProps = {
  height: 16,
  width: 16,
};
export default Fullscreen;
