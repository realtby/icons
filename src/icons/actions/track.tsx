import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Track = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 20 23" fill="none" {...props}>
      <path d="M7 18.866C1 18.273 1 15.874 1 15c0-1 1-2.5 2-4s.5-4 2-7c1-2 3.833-3 5-3 2.8 0 4 1 5 3 1.5 3 1.076 5.613 2 7 1 1.5 2 3 2 4 0 .874 0 3.273-6 3.866m-6 0c.868.086 1.862.134 3 .134s2.132-.048 3-.134m-6 0C7 19.911 7.6 22 10 22s3-2.09 3-3.134" />
    </svg>
  );
};

Track.defaultProps = {
  height: 16,
  width: 16,
};
export default Track;