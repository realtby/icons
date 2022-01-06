import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Helper = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" {...props}>
      <path d="M7.24 9.5v-.34c0-.39.07-.71.19-.97s.34-.52.65-.8c.37-.33.6-.59.71-.77a1.26 1.26 0 0 0 .16-.66c0-.3-.08-.52-.26-.68-.17-.16-.42-.24-.74-.24-.3 0-.57.05-.82.15-.25.1-.5.2-.74.34L6 4.6A3.7 3.7 0 0 1 8.02 4c.61 0 1.1.17 1.45.5.35.35.53.81.53 1.41 0 .27-.03.5-.1.7a2.08 2.08 0 0 1-.31.6c-.14.18-.37.43-.71.73a2.8 2.8 0 0 0-.58.64c-.1.17-.15.4-.15.68v.24h-.9zm-.19 1.68c0-.53.23-.8.69-.8a.6.6 0 0 1 .5.22c.12.14.18.33.18.59 0 .25-.06.45-.18.6a.62.62 0 0 1-.5.21c-.22 0-.4-.07-.51-.21a.93.93 0 0 1-.18-.6z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
      />
    </svg>
  );
};

Helper.defaultProps = {
  height: 16,
  width: 16,
};
export default Helper;
