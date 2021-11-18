import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Delivered = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);
  return (
    <svg viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.758.443a.756.756 0 01.055 1.059l-8.894 10a.738.738 0 01-1.096.007L.2 7.537a.756.756 0 01.041-1.06.735.735 0 011.048.043L4.36 9.887 12.71.498a.735.735 0 011.047-.055z"
        fill="#000"
      />
    </svg>
  );
};

Delivered.defaultProps = {
  height: 16,
  width: 16,
};
export default Delivered;
