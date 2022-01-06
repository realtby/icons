import * as React from 'react';
import type { IconProps } from '../../../core';
import { castIconProps } from '../../../core';

const ListPhoto = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.33 1A2.34 2.34 0 0 0 1 3.33v9.34A2.34 2.34 0 0 0 3.33 15h9.35A2.34 2.34 0 0 0 15 12.67V3.33A2.34 2.34 0 0 0 12.68 1H3.33zM0 3.33A3.34 3.34 0 0 1 3.33 0h9.35A3.34 3.34 0 0 1 16 3.33v9.34A3.34 3.34 0 0 1 12.68 16H3.33A3.34 3.34 0 0 1 0 12.67V3.33zM3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4zm3 0H4v2h2V4zm2 1a.5.5 0 0 1 .5-.5h4a.5.5 0 1 1 0 1h-4A.5.5 0 0 1 8 5zm-5 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2zm3 0H4v2h2v-2zm2 1a.5.5 0 0 1 .5-.5h4a.5.5 0 1 1 0 1h-4A.5.5 0 0 1 8 11z"
      />
    </svg>
  );
};

ListPhoto.defaultProps = {
  height: 16,
  width: 16,
};
export default ListPhoto;
