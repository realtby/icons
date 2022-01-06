import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Youtube = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 25 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.4 4.51a3 3 0 0 1 2.1 2.12c.52 1.88.5 5.8.5 5.8s0 3.89-.5 5.76a3 3 0 0 1-2.1 2.12c-1.88.5-9.4.5-9.4.5s-7.49 0-9.39-.52A3 3 0 0 1 .5 18.17C0 16.32 0 12.4 0 12.4s0-3.9.5-5.77a3.07 3.07 0 0 1 2.1-2.14C4.5 4 12.01 4 12.01 4s7.5 0 9.38.51zm-5.54 7.9L9.6 16V8.8l6.25 3.6z"
      />
    </svg>
  );
};

Youtube.defaultProps = {
  height: 16,
  width: 16,
};
export default Youtube;
