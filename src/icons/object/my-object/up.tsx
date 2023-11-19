import * as React from 'react';
import type { IconProps } from '../../../core';
import { castIconProps } from '../../../core';

const Up = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 14 14" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.69 1.61a.5.5 0 0 1 .625 0l5 4a.5.5 0 0 1-.624.78L7.003 2.64 2.315 6.39a.5.5 0 1 1-.624-.78l5-4Zm.313 6.03-4.688 3.75a.5.5 0 1 1-.624-.78l5-4a.5.5 0 0 1 .624 0l5 4a.5.5 0 1 1-.624.78L7.003 7.64Z"
      />
    </svg>
  );
};

Up.defaultProps = {
  height: 14,
  width: 14,
};
export default Up;
