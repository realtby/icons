import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const EmailAt = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);
  return (
    <svg viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.003 1a7 7 0 103.818 12.868.5.5 0 11.546.838A8 8 0 1116.003 8v1.364a2.545 2.545 0 01-4.887 1 3.91 3.91 0 11-.204-4.976v-.797a.5.5 0 011 0v4.773a1.545 1.545 0 103.09 0V8a7 7 0 00-7-7zm2.909 7a2.91 2.91 0 10-5.818 0 2.91 2.91 0 005.818 0z"
        fill="#1D2126"
      />
    </svg>
  );
};

EmailAt.defaultProps = {
  height: 16,
  width: 16,
};
export default EmailAt;
