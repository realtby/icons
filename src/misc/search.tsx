import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Search = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.713 2.065c-1.035.725-1.71 1.903-1.71 3.81 0 1.909.678 3.157 1.724 3.946C3.795 10.626 5.314 11 7.067 11c1.756 0 3.239-.365 4.272-1.162 1.011-.779 1.664-2.025 1.664-3.963 0-1.936-.65-3.112-1.65-3.828C10.323 1.308 8.84 1 7.067 1 5.3 1 3.78 1.317 2.713 2.065zm-.574-.82C3.449.328 5.21 0 7.067 0c1.854 0 3.588.317 4.869 1.234 1.312.94 2.067 2.452 2.067 4.641 0 2.187-.752 3.753-2.053 4.755a5.315 5.315 0 01-.357.253l4.264 4.263a.5.5 0 01-.708.708l-4.484-4.485c-1.062.445-2.297.631-3.598.631-1.872 0-3.635-.396-4.942-1.38C.795 9.615.003 8.051.003 5.874c0-2.18.794-3.688 2.136-4.63z"
      />
    </svg>
  );
};

Search.defaultProps = {
  height: 16,
  width: 16,
};
export default Search;
