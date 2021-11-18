import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Star = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);
  return (
    <svg viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7.32.458a.74.74 0 011.367 0l1.796 4.075a.76.76 0 00.596.453l4.258.528c.64.08.895.905.423 1.362l-3.147 3.046a.811.811 0 00-.228.733l.836 4.4c.125.66-.546 1.17-1.107.843l-3.742-2.192a.724.724 0 00-.736 0l-3.743 2.192c-.56.328-1.232-.182-1.107-.842l.836-4.401a.81.81 0 00-.228-.733L.246 6.876C-.227 6.419.03 5.593.67 5.514l4.258-.528a.757.757 0 00.596-.453L7.32.458z"
        fill="#1D2126"
      />
    </svg>
  );
};

Star.defaultProps = {
  height: 16,
  width: 16,
};
export default Star;
