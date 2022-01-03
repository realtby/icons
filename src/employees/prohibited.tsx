import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Prohibited = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.003 8a8 8 0 11-16 0 8 8 0 0116 0zm-2 0a6 6 0 01-9.477 4.89l8.368-8.367c.698.981 1.109 2.181 1.109 3.477zm-2.524-4.89l-8.367 8.367A6 6 0 0111.48 3.11z"
      />
    </svg>
  );
};

Prohibited.defaultProps = {
  height: 16,
  width: 16,
};
export default Prohibited;
