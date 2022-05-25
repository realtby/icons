import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Filter = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 12" fill="none" {...props}>
      <path d="M.503 2a.5.5 0 0 0 0 1V2Zm15 1a.5.5 0 1 0 0-1v1Zm0 7a.5.5 0 1 0 0-1v1Zm-15-1a.5.5 0 0 0 0 1V9Zm3.5-8h1.5V0h-1.5v1Zm1.5 3h-1.5v1h1.5V4Zm-1.5 0a1 1 0 0 1-1-1h-1a2 2 0 0 0 2 2V4Zm2.5-1a1 1 0 0 1-1 1v1a2 2 0 0 0 2-2h-1Zm-1-2a1 1 0 0 1 1 1h1a2 2 0 0 0-2-2v1Zm-1.5-1a2 2 0 0 0-2 2h1a1 1 0 0 1 1-1V0Zm2.5 2v.5h1V2h-1Zm0 .5V3h1v-.5h-1Zm.5.5h8.5V2h-8.5v1Zm-6.5 0h2V2h-2v1Zm2.5 0v-.5h-1V3h1Zm0-.5V2h-1v.5h1Zm7.5 5.5h1.5V7h-1.5v1Zm1.5 3h-1.5v1h1.5v-1Zm-1.5 0a1 1 0 0 1-1-1h-1a2 2 0 0 0 2 2v-1Zm2.5-1a1 1 0 0 1-1 1v1a2 2 0 0 0 2-2h-1Zm-1-2a1 1 0 0 1 1 1h1a2 2 0 0 0-2-2v1Zm-1.5-1a2 2 0 0 0-2 2h1a1 1 0 0 1 1-1V7Zm2.5 2v.5h1V9h-1Zm0 .5v.5h1v-.5h-1Zm.5.5h2V9h-2v1Zm-5-1v.5h1V9h-1Zm0 .5v.5h1v-.5h-1Zm-8 .5h8.5V9h-8.5v1Z" />
    </svg>
  );
};

Filter.defaultProps = {
  height: 16,
  width: 16,
};
export default Filter;
