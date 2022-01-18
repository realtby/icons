import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const HeartFill = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 13" {...props} className="">
      <path d="M15.16.9C12.8-1.92 8 2.8 8 2.8S3.2-1.93.84.9C-3.08 5.63 8 13 8 13S19.1 5.62 15.16.9z" />
    </svg>
  );
};

HeartFill.defaultProps = {
  height: 16,
  width: 16,
};
export default HeartFill;
