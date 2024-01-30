import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const CopyOffer = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 2a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-7ZM5 2.5A1.5 1.5 0 0 1 6.5 1h7A1.5 1.5 0 0 1 15 2.5v9a1.5 1.5 0 0 1-1.5 1.5H11v.5A1.5 1.5 0 0 1 9.5 15h-7A1.5 1.5 0 0 1 1 13.5v-9A1.5 1.5 0 0 1 2.5 3H5v-.5ZM5 7V4H2.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V13H6.5A1.5 1.5 0 0 1 5 11.5V11H3.5a.5.5 0 0 1 0-1H5V8H3.5a.5.5 0 0 1 0-1H5Zm2-2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 1 1 0 1h-5a.5.5 0 0 1-.5-.5ZM7 7a.5.5 0 0 1 .5-.5h5a.5.5 0 1 1 0 1h-5A.5.5 0 0 1 7 7Zm0 2.5a.5.5 0 0 1 .5-.5h1.818a.5.5 0 0 1 0 1H7.5a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
};

CopyOffer.defaultProps = {
  height: 16,
  width: 16,
};
export default CopyOffer;
