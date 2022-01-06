import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Envelope = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 12" {...props}>
      <path d="M16 2.65V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v.65l6.8 4.94a2.07 2.07 0 0 0 2.43 0L16 2.64z" />
      <path d="m16 3.91-6.17 4.5a3.1 3.1 0 0 1-3.65 0L0 3.9V10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3.91z" />
    </svg>
  );
};

Envelope.defaultProps = {
  height: 16,
  width: 16,
};
export default Envelope;
