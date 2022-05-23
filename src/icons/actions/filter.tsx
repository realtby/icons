import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Filter = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 16 12" {...props}>
      <path d="M.5 2a.5.5 0 0 0 0 1V2Zm15 1a.5.5 0 0 0 0-1v1Zm0 7a.5.5 0 0 0 0-1v1ZM.5 9a.5.5 0 0 0 0 1V9ZM4 1h1.5V0H4v1Zm1.5 3H4v1h1.5V4ZM4 4a1 1 0 0 1-1-1H2a2 2 0 0 0 2 2V4Zm2.5-1a1 1 0 0 1-1 1v1a2 2 0 0 0 2-2h-1Zm-1-2a1 1 0 0 1 1 1h1a2 2 0 0 0-2-2v1ZM4 0a2 2 0 0 0-2 2h1a1 1 0 0 1 1-1V0Zm2.5 2v.5h1V2h-1Zm0 .5V3h1v-.5h-1ZM7 3h8.5V2H7v1ZM.5 3h2V2h-2v1ZM3 3v-.5H2V3h1Zm0-.5V2H2v.5h1ZM10.5 8H12V7h-1.5v1Zm1.5 3h-1.5v1H12v-1Zm-1.5 0a1 1 0 0 1-1-1h-1a2 2 0 0 0 2 2v-1Zm2.5-1a1 1 0 0 1-1 1v1a2 2 0 0 0 2-2h-1Zm-1-2a1 1 0 0 1 1 1h1a2 2 0 0 0-2-2v1Zm-1.5-1a2 2 0 0 0-2 2h1a1 1 0 0 1 1-1V7ZM13 9v.5h1V9h-1Zm0 .5v.5h1v-.5h-1Zm.5.5h2V9h-2v1Zm-5-1v.5h1V9h-1Zm0 .5v.5h1v-.5h-1Zm-8 .5H9V9H.5v1Z" />
    </svg>
  );
};

Filter.defaultProps = {
  height: 16,
  width: 16,
};
export default Filter;
