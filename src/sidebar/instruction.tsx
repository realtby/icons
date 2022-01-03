import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Instruction = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 23 22" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.003 2a2 2 0 114 0h1.5a.5.5 0 01.5.5V3h2.5a1.5 1.5 0 011.5 1.5v6.522A5.5 5.5 0 1112.26 20H1.503a1.5 1.5 0 01-1.5-1.5v-14a1.5 1.5 0 011.5-1.5h2.5v-.5a.5.5 0 01.5-.5h1.5zm-2 2h-2.5a.5.5 0 00-.5.5v14a.5.5 0 00.5.5h10.1a5.502 5.502 0 013.4-7.793V4.5a.5.5 0 00-.5-.5h-2.5v1.5a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5V4zm7-1h-1.5a.5.5 0 01-.5-.5V2a1 1 0 00-2 0v.5a.5.5 0 01-.5.5h-1.5v2h6V3zm-8 6.5a.5.5 0 01.5-.5h9a.5.5 0 110 1h-9a.5.5 0 01-.5-.5zm13.5 2.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm-13.5.5a.5.5 0 01.5-.5h7a.5.5 0 110 1h-7a.5.5 0 01-.5-.5zm13.5 1.49a.5.5 0 01.5.5v.01a.5.5 0 11-1 0v-.01a.5.5 0 01.5-.5zm-13.5 1.51a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm13.5.5a.5.5 0 01.5.5v2a.5.5 0 11-1 0v-2a.5.5 0 01.5-.5z"
      />
    </svg>
  );
};

Instruction.defaultProps = {
  height: 16,
  width: 16,
};
export default Instruction;
