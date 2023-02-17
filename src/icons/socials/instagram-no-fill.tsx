import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const InstagramNoFill = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 22 22" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.42 11a4.583 4.583 0 1 1 9.166 0 4.583 4.583 0 0 1-9.166 0Zm4.583-3.056a3.056 3.056 0 1 0 0 6.111 3.056 3.056 0 0 0 0-6.11Z"
      />
      <path d="M15.968 4.889a1.146 1.146 0 1 0 0 2.291 1.146 1.146 0 0 0 0-2.291Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.836 7.18a5.347 5.347 0 0 1 5.348-5.347h7.638A5.347 5.347 0 0 1 20.17 7.18v7.64a5.347 5.347 0 0 1-5.348 5.347H7.184a5.347 5.347 0 0 1-5.348-5.348V7.18Zm5.348-3.819a3.82 3.82 0 0 0-3.82 3.82v7.638a3.82 3.82 0 0 0 3.82 3.82h7.638a3.82 3.82 0 0 0 3.82-3.82V7.18a3.82 3.82 0 0 0-3.82-3.819H7.184Z"
      />
    </svg>
  );
};

InstagramNoFill.defaultProps = {
  height: 22,
  width: 22,
};
export default InstagramNoFill;
