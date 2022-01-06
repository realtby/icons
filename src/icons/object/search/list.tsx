import * as React from 'react';
import type { IconProps } from '../../../core';
import { castIconProps } from '../../../core';

const List = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.33 1A2.34 2.34 0 0 0 1 3.33v9.34A2.34 2.34 0 0 0 3.33 15h9.35A2.34 2.34 0 0 0 15 12.67V3.33A2.34 2.34 0 0 0 12.68 1H3.33zM0 3.33A3.34 3.34 0 0 1 3.33 0h9.35A3.34 3.34 0 0 1 16 3.33v9.34A3.34 3.34 0 0 1 12.68 16H3.33A3.34 3.34 0 0 1 0 12.67V3.33zM3 4.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h8a.5.5 0 1 1 0 1h-8A.5.5 0 0 1 3 8zm0 3.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"
      />
    </svg>
  );
};

List.defaultProps = {
  height: 16,
  width: 16,
};
export default List;
