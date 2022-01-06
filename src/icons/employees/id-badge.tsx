import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const IdBadge = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 13 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 0a2 2 0 0 0-2 2v10.5a2 2 0 0 0 2 2h1.17a2 2 0 0 1 1.42.59l.56.56a1.2 1.2 0 0 0 1.7 0l.57-.56a2 2 0 0 1 1.41-.59H10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6 5.1c0 1.17-.88 2.11-1.98 2.11s-1.99-.94-1.99-2.1c0-1.17.9-2.11 1.99-2.11s1.99.94 1.99 2.1zm-5.49 5.06c.42-2.33 2.56-2.95 3.51-2.95 2.06 0 3.13 1.66 3.46 2.96.12.45-.24.83-.68.83H3.24a.72.72 0 0 1-.73-.84z"
      />
    </svg>
  );
};

IdBadge.defaultProps = {
  height: 16,
  width: 16,
};
export default IdBadge;
