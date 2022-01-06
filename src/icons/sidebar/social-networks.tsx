import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const SocialNetworks = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 19 22" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.67 1a2.35 2.35 0 0 0-2.2 3.15 2.34 2.34 0 0 0 2.2 1.58c1.28 0 2.33-1.06 2.33-2.37S15.95 1 14.67 1zm-3.33 2.36A3.35 3.35 0 0 1 14.67 0 3.35 3.35 0 0 1 18 3.36a3.35 3.35 0 0 1-3.33 3.37 3.33 3.33 0 0 1-2.87-1.65L6.15 9.2a3.38 3.38 0 0 1 0 3.6l5.65 4.12a3.33 3.33 0 0 1 2.87-1.65c1.84 0 3.33 1.51 3.33 3.37S16.52 22 14.67 22a3.35 3.35 0 0 1-3.25-4.12L5.5 13.56a3.3 3.3 0 0 1-2.16.8A3.34 3.34 0 0 1 0 11a3.34 3.34 0 0 1 5.5-2.56l5.92-4.32a3.4 3.4 0 0 1-.09-.76zm-8 5.28A2.35 2.35 0 0 0 1 11a2.35 2.35 0 0 0 2.34 2.36c.69 0 1.3-.3 1.73-.78.37-.42.6-.97.6-1.58a2.37 2.37 0 0 0-.6-1.58 2.31 2.31 0 0 0-1.73-.78zm11.33 7.63a2.34 2.34 0 0 0-2.2 1.58 2.39 2.39 0 0 0-.13.79A2.35 2.35 0 0 0 14.67 21 2.35 2.35 0 0 0 17 18.64a2.35 2.35 0 0 0-2.33-2.37z"
      />
    </svg>
  );
};

SocialNetworks.defaultProps = {
  height: 16,
  width: 16,
};
export default SocialNetworks;
