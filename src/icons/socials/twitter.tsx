import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Twitter = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 25 24" {...props}>
      <path d="M23 5.8a8.55 8.55 0 0 1-2.36.65 4.08 4.08 0 0 0 1.8-2.27 8.2 8.2 0 0 1-2.6 1 4.1 4.1 0 0 0-7.09 2.8c0 .32.03.63.1.93a11.6 11.6 0 0 1-8.46-4.29 4.13 4.13 0 0 0-.56 2.07 4.1 4.1 0 0 0 1.82 3.41 4.05 4.05 0 0 1-1.85-.5v.04a4.12 4.12 0 0 0 3.29 4.03 4.09 4.09 0 0 1-1.08.14c-.26 0-.53-.02-.77-.07a4.14 4.14 0 0 0 3.83 2.85 8.24 8.24 0 0 1-5.09 1.75A7.67 7.67 0 0 1 3 18.3a11.54 11.54 0 0 0 6.3 1.84c7.54 0 11.66-6.25 11.66-11.67l-.01-.53A8.18 8.18 0 0 0 23 5.8z" />
    </svg>
  );
};

Twitter.defaultProps = {
  height: 16,
  width: 16,
};
export default Twitter;
