import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const HeartFill = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M15.163.907c-2.366-2.84-7.16 1.894-7.16 1.894S3.208-1.933.843.907C-3.079 5.617 8.003 13 8.003 13S19.085 5.616 15.163.907z" />
    </svg>
  );
};

HeartFill.defaultProps = {
  height: 16,
  width: 16,
};
export default HeartFill;
