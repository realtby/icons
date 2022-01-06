import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const SelectBurger = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 13 10" {...props}>
      <path d="M.003 9a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2h-10a1 1 0 0 1-1-1zm0-4a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2h-10a1 1 0 0 1-1-1zm0-4a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2h-10a1 1 0 0 1-1-1z" />
    </svg>
  );
};

SelectBurger.defaultProps = {
  height: 16,
  width: 16,
};
export default SelectBurger;
