import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Statistics = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 24 22" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0V1.57l-5.18 4.31a.5.5 0 0 1-.6.04l-2.65-1.78-8.71 8.71a.5.5 0 0 1-.71-.7l9-9a.5.5 0 0 1 .63-.07l2.69 1.8L19.12 1H17.5a.5.5 0 0 1-.5-.5zm-1 7a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5V21h1.5a.5.5 0 1 1 0 1H.5a.5.5 0 0 1 0-1H2v-3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5V21h2v-7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5V21h2V7.5zM17 21h3V8h-3v13zm-4 0v-7h-3v7h3zm-7 0v-3H3v3h3z"
      />
    </svg>
  );
};

Statistics.defaultProps = {
  height: 16,
  width: 16,
};
export default Statistics;
