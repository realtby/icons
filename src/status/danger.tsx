import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Danger = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 21 20" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.737.718a2.452 2.452 0 00-3.466 0L.721 8.266a2.45 2.45 0 000 3.468l7.55 7.548a2.453 2.453 0 003.466 0l7.55-7.548a2.45 2.45 0 000-3.468L11.737.718zM10.003 12a1 1 0 01-1-1V6a1 1 0 012 0v5a1 1 0 01-1 1zm0 3a1 1 0 110-2 1 1 0 010 2z"
      />
    </svg>
  );
};

Danger.defaultProps = {
  height: 16,
  width: 16,
};
export default Danger;
