import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const EmailAt = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1a7 7 0 1 0 3.82 12.87.5.5 0 1 1 .55.84A8 8 0 1 1 16 8v1.36a2.54 2.54 0 0 1-4.88 1 3.91 3.91 0 1 1-.2-4.97v-.8a.5.5 0 0 1 1 0v4.77a1.54 1.54 0 1 0 3.08 0V8a7 7 0 0 0-7-7zm2.91 7A2.91 2.91 0 1 0 5.1 8a2.91 2.91 0 0 0 5.82 0z"
      />
    </svg>
  );
};

EmailAt.defaultProps = {
  height: 16,
  width: 16,
};
export default EmailAt;
