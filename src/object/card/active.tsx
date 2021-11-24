import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Active = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M10.003 5a5 5 0 11-10 0 5 5 0 0110 0z" fill="#000" />
    </svg>
  );
};

Active.defaultProps = {
  height: 16,
  width: 16,
};
export default Active;
