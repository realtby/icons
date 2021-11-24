import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const NumberLife = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M6.66 11.095c0 .51-.414.925-.928.925a.926.926 0 110-1.851c.514 0 .928.415.928.926zm0-6.19a.927.927 0 01-1.857 0 .927.927 0 011.857 0zm1.65-3.892l.444-.328c1.531 1.965 2.45 4.677 2.45 7.315 0 2.637-.919 5.35-2.45 7.315l-.444-.328C9.469 12.835 10.055 10.77 10.055 8c0-2.77-.586-4.835-1.745-6.987z"
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
