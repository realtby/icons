import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const ListPhoto = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.33 1a2.34 2.34 0 00-2.327 2.328v9.345A2.34 2.34 0 003.33 15h9.345a2.34 2.34 0 002.328-2.328V3.327A2.34 2.34 0 0012.675 1H3.33zM.003 3.328A3.34 3.34 0 013.33 0h9.345a3.34 3.34 0 013.328 3.328v9.345A3.34 3.34 0 0112.675 16H3.33a3.34 3.34 0 01-3.327-3.328V3.327zm3 .672a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V4zm3 0h-2v2h2V4zm2 1a.5.5 0 01.5-.5h4a.5.5 0 110 1h-4a.5.5 0 01-.5-.5zm-5 5a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2zm3 0h-2v2h2v-2zm2 1a.5.5 0 01.5-.5h4a.5.5 0 110 1h-4a.5.5 0 01-.5-.5z"
        fill="#1D2126"
      />
    </svg>
  );
};

ListPhoto.defaultProps = {
  height: 16,
  width: 16,
};
export default ListPhoto;
