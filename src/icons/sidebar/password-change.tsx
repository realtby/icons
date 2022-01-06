import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const PasswordChange = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 23 22" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 3.5a3.5 3.5 0 1 1 7 0V7h1.5A1.5 1.5 0 0 1 13 8.5v1a.5.5 0 1 1-1 0v-1a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 1 0 17.5v-9A1.5 1.5 0 0 1 1.5 7H3V3.5zM4 7h5V3.5a2.5 2.5 0 0 0-5 0V7zm13.5 6a3.4 3.4 0 0 0-3.5 3.5.5.5 0 1 1-1 0 4.4 4.4 0 0 1 4.5-4.5c1.24 0 2.55.45 3.5 1.21v-.71a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.89c-.76-.6-1.83-1-2.89-1zm4 4a.5.5 0 0 1 .5.5 4.4 4.4 0 0 1-4.5 4.5 5.76 5.76 0 0 1-3.5-1.21v.71a.5.5 0 1 1-1 0v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 1 1 0 1h-.88c.75.6 1.83 1 2.88 1a3.4 3.4 0 0 0 3.5-3.5.5.5 0 0 1 .5-.5z"
      />
    </svg>
  );
};

PasswordChange.defaultProps = {
  height: 16,
  width: 16,
};
export default PasswordChange;
