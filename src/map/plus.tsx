import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

export const testId = 'plus-icon';

const Plus = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);
  return (
    <svg
      data-testid={testId}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.003.4a.6.6 0 01.6.6v6.4h6.4a.6.6 0 110 1.2h-6.4V15a.6.6 0 11-1.2 0V8.6h-6.4a.6.6 0 110-1.2h6.4V1a.6.6 0 01.6-.6z"
        fill="#1D2126"
      />
    </svg>
  );
};

Plus.defaultProps = {
  height: 16,
  width: 16,
};
export default Plus;
