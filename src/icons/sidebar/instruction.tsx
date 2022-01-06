import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Instruction = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 23 22" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2a2 2 0 1 1 4 0h1.5a.5.5 0 0 1 .5.5V3h2.5A1.5 1.5 0 0 1 16 4.5v6.52A5.5 5.5 0 1 1 12.26 20H1.5A1.5 1.5 0 0 1 0 18.5v-14A1.5 1.5 0 0 1 1.5 3H4v-.5a.5.5 0 0 1 .5-.5H6zM4 4H1.5a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .5.5h10.1a5.5 5.5 0 0 1 3.4-7.8V4.5a.5.5 0 0 0-.5-.5H12v1.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5V4zm7-1H9.5a.5.5 0 0 1-.5-.5V2a1 1 0 0 0-2 0v.5a.5.5 0 0 1-.5.5H5v2h6V3zM3 9.5a.5.5 0 0 1 .5-.5h9a.5.5 0 1 1 0 1h-9a.5.5 0 0 1-.5-.5zM16.5 12a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zM3 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 1 1 0 1h-7a.5.5 0 0 1-.5-.5zm13.5 1.49a.5.5 0 0 1 .5.5v.01a.5.5 0 1 1-1 0v-.01a.5.5 0 0 1 .5-.5zM3 15.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm13.5.5a.5.5 0 0 1 .5.5v2a.5.5 0 1 1-1 0v-2a.5.5 0 0 1 .5-.5z"
      />
    </svg>
  );
};

Instruction.defaultProps = {
  height: 16,
  width: 16,
};
export default Instruction;
