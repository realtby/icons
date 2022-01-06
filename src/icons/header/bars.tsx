import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Bars = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 21 18" {...props}>
      <path d="M.003.5a.5.5 0 0 1 .5-.5h19a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5v-1zm0 8a.5.5 0 0 1 .5-.5h19a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5v-1zm0 8a.5.5 0 0 1 .5-.5h19a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5v-1z" />
    </svg>
  );
};

Bars.defaultProps = {
  height: 16,
  width: 16,
};
export default Bars;
