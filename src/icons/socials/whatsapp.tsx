import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Whatsapp = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 25 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 12A12 12 0 0 1 12 0a12 12 0 0 1 6.35 1.82A12 12 0 0 1 5.67 22.18l-5 1.78a.48.48 0 0 1-.35 0 .5.5 0 0 1-.28-.65l1.86-4.84A12 12 0 0 1 0 12zm15.72 1.05c.77.4 2 1 2 1a.5.5 0 0 1 .27.45v1a3.01 3.01 0 0 1-3 2.5c-1.57 0-4.58-1.88-5.85-3.15C7.88 13.58 6 10.57 6 9a3.01 3.01 0 0 1 2.5-3h1a.5.5 0 0 1 .45.28s.6 1.22 1 1.99c.44.87-.4 1.89-.87 2.37a6 6 0 0 0 1.27 2 6.03 6.03 0 0 0 2 1.27c.49-.47 1.5-1.3 2.37-.86z"
      />
    </svg>
  );
};

Whatsapp.defaultProps = {
  height: 16,
  width: 16,
};
export default Whatsapp;
