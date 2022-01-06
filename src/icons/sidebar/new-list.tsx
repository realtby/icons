import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const NewList = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 25 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.84 1A3.85 3.85 0 0 0 1 4.83v14.34A3.85 3.85 0 0 0 4.84 23h14.33A3.85 3.85 0 0 0 23 19.17V4.82A3.85 3.85 0 0 0 19.17 1H4.84zM0 4.83A4.85 4.85 0 0 1 4.84 0h14.33A4.85 4.85 0 0 1 24 4.83v14.34A4.85 4.85 0 0 1 19.17 24H4.84A4.85 4.85 0 0 1 0 19.16V4.84zM4 6.5a.5.5 0 0 1 .5-.5h12a.5.5 0 1 1 0 1h-12a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h9a.5.5 0 1 1 0 1h-9a.5.5 0 0 1-.5-.5zM17.5 13a.5.5 0 0 1 .5.5v2.51l2.5.01a.5.5 0 1 1 0 1H18v2.48a.5.5 0 1 1-1 0v-2.49L14.5 17a.5.5 0 0 1 0-1l2.5.01V13.5a.5.5 0 0 1 .5-.5zM3.98 16.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"
      />
    </svg>
  );
};

NewList.defaultProps = {
  height: 16,
  width: 16,
};
export default NewList;
