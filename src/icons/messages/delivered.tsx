import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Delivered = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.758 2.193a.756.756 0 0 1 .055 1.059l-8.767 10.5a.737.737 0 0 1-1.095.007L1.2 9.287a.756.756 0 0 1 .041-1.06.735.735 0 0 1 1.048.043l3.2 3.867 8.222-9.889a.735.735 0 0 1 1.047-.055Z"
      />
    </svg>
  );
};

Delivered.defaultProps = {
  height: 16,
  width: 16,
};
export default Delivered;
