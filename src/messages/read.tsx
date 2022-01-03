import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Read = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 15 12" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.758.443a.756.756 0 01.055 1.059l-8.894 10a.738.738 0 01-1.096.007L.2 7.537a.756.756 0 01.041-1.06.735.735 0 011.048.043L4.36 9.887 12.71.498a.735.735 0 011.047-.055zm0 5.333a.756.756 0 01.055 1.06l-4.15 4.666a.737.737 0 01-1.096.007l-.906-.993a.756.756 0 01.042-1.06.735.735 0 011.047.042l.354.389 3.607-4.055a.735.735 0 011.047-.056z"
      />
    </svg>
  );
};

Read.defaultProps = {
  height: 16,
  width: 16,
};
export default Read;
