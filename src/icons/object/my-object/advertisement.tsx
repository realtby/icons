import * as React from 'react';
import type { IconProps } from '../../../core';
import { castIconProps } from '../../../core';

const Advertisement = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 14 14" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.003 2h8v10h-8V2Zm-1 0a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V2Zm3.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm-.5 3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z"
      />
    </svg>
  );
};

Advertisement.defaultProps = {
  height: 14,
  width: 14,
};
export default Advertisement;
