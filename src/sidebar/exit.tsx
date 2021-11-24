import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Exit = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.003 1.5a1.5 1.5 0 011.5-1.5h15a1.5 1.5 0 011.5 1.5v3a.5.5 0 11-1 0v-3a.5.5 0 00-.5-.5h-15a.5.5 0 00-.5.5v19a.5.5 0 00.5.5h15a.5.5 0 00.5-.5v-4a.5.5 0 011 0v4a1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5v-19zm19.146 5.646a.5.5 0 01.707 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.707-.708L21.296 11H9.503a.5.5 0 010-1h11.793l-2.147-2.146a.5.5 0 010-.708z"
        fill="#000"
      />
    </svg>
  );
};

Exit.defaultProps = {
  height: 16,
  width: 16,
};
export default Exit;
