import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Share = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);
  return (
    <svg viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.003 1.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM8.253 3a2.75 2.75 0 11.762 1.9L5.688 7.405a2.76 2.76 0 01.005 1.168l3.337 2.512a2.75 2.75 0 11-.716 1.338l-3.335-2.51a2.75 2.75 0 11-.014-3.84l3.344-2.518A2.762 2.762 0 018.253 3zm-5.25 3.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm8 5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"
        fill="#000"
      />
    </svg>
  );
};

Share.defaultProps = {
  height: 16,
  width: 16,
};
export default Share;
