import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Search = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.71 2.06c-1.03.73-1.7 1.9-1.7 3.81 0 1.91.67 3.16 1.72 3.95C3.79 10.62 5.3 11 7.07 11c1.75 0 3.24-.36 4.27-1.16C12.35 9.06 13 7.8 13 5.88c0-1.94-.65-3.12-1.65-3.83C10.32 1.3 8.84 1 7.07 1 5.3 1 3.78 1.32 2.7 2.06zm-.57-.82C3.44.34 5.2 0 7.07 0c1.85 0 3.58.32 4.87 1.23C13.24 2.17 14 3.7 14 5.87c0 2.2-.75 3.76-2.05 4.76a5.32 5.32 0 0 1-.36.25l4.27 4.27a.5.5 0 0 1-.71.7l-4.49-4.48c-1.06.44-2.3.63-3.6.63a8.2 8.2 0 0 1-4.94-1.38C.8 9.62 0 8.05 0 5.87S.8 2.2 2.14 1.24z"
      />
    </svg>
  );
};

Search.defaultProps = {
  height: 16,
  width: 16,
};
export default Search;
