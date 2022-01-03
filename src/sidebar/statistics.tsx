import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Statistics = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 24 22" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.003.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v3a.5.5 0 11-1 0V1.568l-5.18 4.316a.5.5 0 01-.597.032l-2.66-1.773-8.71 8.71a.5.5 0 01-.707-.707l9-9a.5.5 0 01.631-.062l2.69 1.793L19.122 1h-1.62a.5.5 0 01-.5-.5zm-1 7a.5.5 0 01.5-.5h4a.5.5 0 01.5.5V21h1.5a.5.5 0 110 1h-22a.5.5 0 010-1h1.5v-3.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5V21h2v-7.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5V21h2V7.5zm1 13.5h3V8h-3v13zm-4 0v-7h-3v7h3zm-7 0v-3h-3v3h3z"
      />
    </svg>
  );
};

Statistics.defaultProps = {
  height: 16,
  width: 16,
};
export default Statistics;
