import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Up = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        d="M9.688 4.61a.5.5 0 0 1 .624 0l5 4a.5.5 0 0 1-.624.78L10 5.64 5.312 9.39a.5.5 0 1 1-.624-.78l5-4ZM10 10.64l-4.688 3.75a.5.5 0 1 1-.624-.78l5-4a.5.5 0 0 1 .624 0l5 4a.5.5 0 1 1-.624.78L10 10.64Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Up.defaultProps = {
  height: 20,
  width: 20,
};
export default Up;
