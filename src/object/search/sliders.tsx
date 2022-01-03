import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Sliders = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M.503 2a.5.5 0 000 1V2zm15 1a.5.5 0 100-1v1zm0 7a.5.5 0 100-1v1zm-15-1a.5.5 0 000 1V9zm3.5-8h1.5V0h-1.5v1zm1.5 3h-1.5v1h1.5V4zm-1.5 0a1 1 0 01-1-1h-1a2 2 0 002 2V4zm2.5-1a1 1 0 01-1 1v1a2 2 0 002-2h-1zm-1-2a1 1 0 011 1h1a2 2 0 00-2-2v1zm-1.5-1a2 2 0 00-2 2h1a1 1 0 011-1V0zm2.5 2v.5h1V2h-1zm0 .5V3h1v-.5h-1zm.5.5h8.5V2h-8.5v1zm-6.5 0h2V2h-2v1zm2.5 0v-.5h-1V3h1zm0-.5V2h-1v.5h1zm7.5 5.5h1.5V7h-1.5v1zm1.5 3h-1.5v1h1.5v-1zm-1.5 0a1 1 0 01-1-1h-1a2 2 0 002 2v-1zm2.5-1a1 1 0 01-1 1v1a2 2 0 002-2h-1zm-1-2a1 1 0 011 1h1a2 2 0 00-2-2v1zm-1.5-1a2 2 0 00-2 2h1a1 1 0 011-1V7zm2.5 2v.5h1V9h-1zm0 .5v.5h1v-.5h-1zm.5.5h2V9h-2v1zm-5-1v.5h1V9h-1zm0 .5v.5h1v-.5h-1zm-8 .5h8.5V9h-8.5v1z" />
    </svg>
  );
};

Sliders.defaultProps = {
  height: 16,
  width: 16,
};
export default Sliders;
