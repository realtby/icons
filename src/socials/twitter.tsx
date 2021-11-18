import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Twitter = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M23.003 5.799a8.548 8.548 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.194 8.194 0 01-2.6.993 4.099 4.099 0 00-7.093 2.804c0 .324.028.637.096.934-3.41-.166-6.425-1.8-8.452-4.288a4.128 4.128 0 00-.56 2.072c0 1.42.73 2.679 1.82 3.407a4.05 4.05 0 01-1.852-.505v.046a4.119 4.119 0 003.285 4.028 4.09 4.09 0 01-1.075.135c-.263 0-.528-.015-.776-.07.53 1.624 2.038 2.818 3.83 2.857a8.238 8.238 0 01-5.083 1.748 7.67 7.67 0 01-.981-.056 11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.668 0-.18-.006-.356-.015-.53A8.179 8.179 0 0023.003 5.8z"
        fill="#03A9F4"
      />
    </svg>
  );
};

Twitter.defaultProps = {
  height: 16,
  width: 16,
};
export default Twitter;
