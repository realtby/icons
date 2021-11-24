import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Send = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.186.113a.5.5 0 01.54-.06l15 7.5a.5.5 0 010 .894l-15 7.5a.5.5 0 01-.705-.579L2.03 8 .02.632A.5.5 0 01.186.113zM2.93 8.5l-1.65 6.053L13.385 8.5H2.93zm10.455-1H2.93L1.28 1.447 13.385 7.5z"
        fill="#000"
      />
    </svg>
  );
};

Send.defaultProps = {
  height: 16,
  width: 16,
};
export default Send;
