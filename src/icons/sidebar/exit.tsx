import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Exit = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 24 22" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1.5A1.5 1.5 0 0 1 1.5 0h15A1.5 1.5 0 0 1 18 1.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 0 0-.5-.5h-15a.5.5 0 0 0-.5.5v19a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 1 0v4a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 0 20.5v-19zm19.15 5.65a.5.5 0 0 1 .7 0l3 3a.5.5 0 0 1 0 .7l-3 3a.5.5 0 0 1-.7-.7L21.3 11H9.5a.5.5 0 0 1 0-1h11.8l-2.15-2.15a.5.5 0 0 1 0-.7z"
      />
    </svg>
  );
};

Exit.defaultProps = {
  height: 16,
  width: 16,
};
export default Exit;
