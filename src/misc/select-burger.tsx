import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const SelectBurger = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);
  return (
    <svg viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M.003 9a1 1 0 011-1h10a1 1 0 110 2h-10a1 1 0 01-1-1zM.003 5a1 1 0 011-1h10a1 1 0 110 2h-10a1 1 0 01-1-1zM.003 1a1 1 0 011-1h10a1 1 0 110 2h-10a1 1 0 01-1-1z"
        fill="#000"
      />
    </svg>
  );
};

SelectBurger.defaultProps = {
  height: 16,
  width: 16,
};
export default SelectBurger;
