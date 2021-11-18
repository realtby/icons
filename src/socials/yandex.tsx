import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Yandex = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8.468 21.5l3.736-7.095h1.644V21.5h2.342v-19h-4.145c-2.648 0-5.79 2.396-5.79 6.27 0 3.882 3.95 5.46 3.95 5.46L5.503 21.5h2.965zm1.45-9.711c-.586-.606-1.088-1.652-1.088-3.378 0-3.782 2.528-4.25 2.872-4.314h2.072v8.628h-1.561c-.883 0-1.747-.33-2.305-.918l.01-.018z"
        fill="#CD2A00"
      />
    </svg>
  );
};

Yandex.defaultProps = {
  height: 16,
  width: 16,
};
export default Yandex;
