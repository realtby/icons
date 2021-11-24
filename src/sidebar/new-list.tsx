import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const NewList = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.838 1a3.853 3.853 0 00-3.835 3.835v14.33A3.853 3.853 0 004.838 23h14.33a3.853 3.853 0 003.835-3.835V4.835A3.853 3.853 0 0019.167 1H4.838zM.003 4.835C.003 2.18 2.182 0 4.838 0h14.33c2.656 0 4.835 2.179 4.835 4.835v14.33c0 2.656-2.179 4.835-4.836 4.835H4.838C2.182 24 .003 21.821.003 19.165V4.835zm4 1.665a.5.5 0 01.5-.5h12a.5.5 0 110 1h-12a.5.5 0 01-.5-.5zm0 5a.5.5 0 01.5-.5h9a.5.5 0 110 1h-9a.5.5 0 01-.5-.5zm13.5 1.5a.5.5 0 01.5.5v2.513l2.502.01a.5.5 0 11-.004 1l-2.498-.01V19.5a.5.5 0 11-1 0v-2.49L14.5 17a.5.5 0 01.004-1l2.498.01V13.5a.5.5 0 01.5-.5zM3.98 16.5a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5z"
        fill="#000"
      />
    </svg>
  );
};

NewList.defaultProps = {
  height: 16,
  width: 16,
};
export default NewList;
