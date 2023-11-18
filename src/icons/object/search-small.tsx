import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const SearchSmall = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        d="M10.219 5.879a3 3 0 1 1-4.243 4.242A3 3 0 0 1 10.22 5.88Zm1.045 4.566a4 4 0 1 0-.706.709l3.537 3.4a.5.5 0 0 0 .693-.72l-3.524-3.39Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

SearchSmall.defaultProps = {
  height: 20,
  width: 20,
};
export default SearchSmall;
