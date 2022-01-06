import * as React from 'react';
import type { IconProps } from '../../../core';
import { castIconProps } from '../../../core';

const NumberPhone = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.36.1c1.32-.4 2.5.42 3.26 1.19a4.27 4.27 0 0 1 1.32 2.23c.12.8-.16 1.62-.96 2.43a4.17 4.17 0 0 1-.65.54l.5.63a20.85 20.85 0 0 0 3.7 3.55c.14-.22.31-.44.53-.65.8-.8 1.61-1.09 2.42-.97.79.12 1.52.62 2.19 1.28.41.42.76.86 1 1.32.27.52.4 1.09.3 1.7-.1.56-.4 1.12-.93 1.65a2.96 2.96 0 0 1-2.33 1 8.53 8.53 0 0 1-3.88-1.2c-1.42-.78-2.9-1.9-4.31-3.3C2.29 9.28.74 6.8.22 4.77a4.72 4.72 0 0 1-.13-2.29A3.2 3.2 0 0 1 1 .97c.2-.2.41-.38.63-.51.24-.16.48-.28.73-.36z"
      />
    </svg>
  );
};

NumberPhone.defaultProps = {
  height: 16,
  width: 16,
};
export default NumberPhone;
