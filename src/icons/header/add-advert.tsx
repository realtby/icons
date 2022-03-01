import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const AddAdvert = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 19 14" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.003.5a.5.5 0 0 1 .5-.5h16.002a.5.5 0 1 1 0 1H1.503a.5.5 0 0 1-.5-.5Zm0 5a.5.5 0 0 1 .5-.5h9a.5.5 0 1 1 0 1h-9a.5.5 0 0 1-.5-.5Zm13.5 1.5a.5.5 0 0 1 .5.5v2.513l2.502.01a.5.5 0 1 1-.004 1l-2.498-.01V13.5a.5.5 0 1 1-1 0v-2.49L11.5 11a.5.5 0 0 1 .004-1l2.498.01V7.5a.5.5 0 0 1 .5-.5ZM.98 10.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
};

AddAdvert.defaultProps = {
  height: 16,
  width: 16,
};
export default AddAdvert;
