import * as React from 'react';
import type { IconProps } from '../../../core';
import { castIconProps } from '../../../core';

const SearchSmall = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 14 14" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.219 2.879A3 3 0 1 1 2.976 7.12a3 3 0 0 1 4.243-4.24Zm1.045 4.566a4 4 0 1 0-.706.709l3.537 3.4a.5.5 0 0 0 .693-.72l-3.524-3.39Z"
      />
    </svg>
  );
};

SearchSmall.defaultProps = {
  height: 14,
  width: 14,
};
export default SearchSmall;
