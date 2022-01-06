import * as React from 'react';
import type { IconProps } from '../../../core';
import { castIconProps } from '../../../core';

const Active = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 11 10" {...props}>
      <path d="M10.003 5a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
    </svg>
  );
};

Active.defaultProps = {
  height: 16,
  width: 16,
};
export default Active;
