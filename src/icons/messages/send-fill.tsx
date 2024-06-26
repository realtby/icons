import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const SendFill = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 32 32" {...props}>
      <path d="m17.996 16-15-2L.432 2.034A1 1 0 0 1 1.857.93L31.1 15.553a.5.5 0 0 1 0 .894L1.857 31.07a1 1 0 0 1-1.425-1.104L2.996 18l15-2Z" />
    </svg>
  );
};

SendFill.defaultProps = {
  height: 32,
  width: 32,
};
export default SendFill;
