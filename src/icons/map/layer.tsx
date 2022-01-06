import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Layer = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 22 20" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.16 1.35a.39.39 0 0 0-.32 0L2.23 5.31a.4.4 0 0 0 0 .72l8.6 3.96a.39.39 0 0 0 .33 0l8.61-3.96a.4.4 0 0 0 0-.72l-8.6-3.96zm.61-1.04 8.5 3.9a1.6 1.6 0 0 1 0 2.91l-1.23.57 1.23.57a1.6 1.6 0 0 1 0 2.9l-1.23.58 1.23.56a1.6 1.6 0 0 1 0 2.91l-8.6 3.96a1.59 1.59 0 0 1-1.33 0L1.73 15.2a1.6 1.6 0 0 1 0-2.9l1.23-.57-1.23-.57a1.6 1.6 0 0 1 0-2.9l1.23-.58-1.23-.57a1.6 1.6 0 0 1 0-2.9l8.6-3.96a1.59 1.59 0 0 1 1.24-.04c.07.02.13.06.2.09zM4.4 8.35l-2.17 1a.4.4 0 0 0 0 .73l8.6 3.95a.39.39 0 0 0 .33 0l8.61-3.95a.4.4 0 0 0 0-.73l-2.17-1-5.94 2.73a1.59 1.59 0 0 1-1.32 0L4.4 8.35zm0 4.05-2.17 1a.4.4 0 0 0 0 .72l8.6 3.96a.39.39 0 0 0 .33 0l8.61-3.96a.4.4 0 0 0 0-.72l-2.17-1-5.94 2.73a1.59 1.59 0 0 1-1.32 0L4.4 12.4z"
      />
    </svg>
  );
};

Layer.defaultProps = {
  height: 16,
  width: 16,
};
export default Layer;
