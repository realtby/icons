import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const District = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path d="M8 13.5c1.5 0 2.5-1 2.5-4.5l5 3L8 15.5.5 12l5-3c0 3.5 1 4.5 2.5 4.5Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.746 8.565A.5.5 0 0 1 6 9c0 1.723.25 2.73.61 3.294.326.513.772.706 1.39.706.618 0 1.064-.193 1.39-.706.36-.564.61-1.57.61-3.294a.5.5 0 0 1 .757-.429l5 3a.5.5 0 0 1-.046.882l-7.5 3.5a.5.5 0 0 1-.422 0l-7.5-3.5a.5.5 0 0 1-.046-.882l5-3a.5.5 0 0 1 .503-.006Zm-4.182 3.38L8 14.948l6.436-3.003-3.458-2.075c-.072 1.322-.316 2.29-.744 2.96C9.686 13.694 8.882 14 8 14c-.882 0-1.686-.307-2.234-1.17-.427-.67-.672-1.638-.744-2.96l-3.458 2.075Z"
      />
      <path d="M7 4a1 1 0 0 1 2 0v7a1 1 0 1 1-2 0V4Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6.75 2.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
      />
    </svg>
  );
};

District.defaultProps = {
  height: 16,
  width: 16,
};
export default District;
