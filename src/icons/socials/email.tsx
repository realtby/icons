import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Email = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 25 25" {...props}>
      <path d="m16.03 13.42-2 1.92c-.82.77-2.26.79-3.09 0l-2.01-1.92-7.22 6.87c.27.12.57.19.88.19h19.78c.32 0 .61-.07.88-.19l-7.22-6.87z" />
      <path d="M22.37 4.48H2.6c-.32 0-.61.07-.88.19L9.42 12l2.52 2.38c.26.26.82.26 1.09 0l2.5-2.38 7.72-7.34a2.18 2.18 0 0 0-.88-.2zM.7 5.6a1.9 1.9 0 0 0-.22.88v12a2 2 0 0 0 .22.88l7.24-6.88L.7 5.6zm23.56 0-7.24 6.88 7.24 6.88c.14-.27.22-.56.22-.88v-12c0-.32-.08-.61-.22-.88z" />
    </svg>
  );
};

Email.defaultProps = {
  height: 16,
  width: 16,
};
export default Email;
