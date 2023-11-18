import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Advertisement = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5h8v10H6V5ZM5 5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5Zm3.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM8 10a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 8 10Zm.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Advertisement.defaultProps = {
  height: 20,
  width: 20,
};
export default Advertisement;
