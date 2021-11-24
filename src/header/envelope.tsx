import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Envelope = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16.003 2.647V2a2 2 0 00-2-2h-12a2 2 0 00-2 2v.647l6.782 4.938a2.073 2.073 0 002.436 0l6.782-4.938z"
        fill="#000"
      />
      <path
        d="M16.003 3.912L9.83 8.406a3.109 3.109 0 01-3.654 0L.003 3.912V10a2 2 0 002 2h12a2 2 0 002-2V3.912z"
        fill="#000"
      />
    </svg>
  );
};

Envelope.defaultProps = {
  height: 16,
  width: 16,
};
export default Envelope;
