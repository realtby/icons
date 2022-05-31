import * as React from 'react';
import type { IconProps } from '../../../core';
import { castIconProps } from '../../../core';

const NumberLife = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 8 16" fill="none" {...props}>
      <path
        d="M2.357 11.19c0 .51-.414.925-.929.925a.926.926 0 1 1 0-1.85c.514 0 .929.414.929.925Zm0-6.19c0 .51-.415.926-.929.926A.927.927 0 0 1 .5 5a.927.927 0 0 1 1.857 0Zm2.25-3.987L5.05.685C6.581 2.65 7.5 5.362 7.5 8c0 2.638-.919 5.35-2.45 7.315l-.444-.328C5.766 12.836 6.352 10.77 6.352 8c0-2.769-.587-4.835-1.746-6.987Z"
        fill="#03278F"
        stroke="#03278F"
      />
    </svg>
  );
};

NumberLife.defaultProps = {
  height: 16,
  width: 16,
};
export default NumberLife;
