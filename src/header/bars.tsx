import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Bars = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);
  return (
    <svg viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M.003.5a.5.5 0 01.5-.5h19a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-19a.5.5 0 01-.5-.5v-1zM.003 8.5a.5.5 0 01.5-.5h19a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-19a.5.5 0 01-.5-.5v-1zM.003 16.5a.5.5 0 01.5-.5h19a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-19a.5.5 0 01-.5-.5v-1z"
        fill="#000"
      />
    </svg>
  );
};

Bars.defaultProps = {
  height: 16,
  width: 16,
};
export default Bars;
