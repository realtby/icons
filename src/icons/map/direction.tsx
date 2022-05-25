import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Direction = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 16 16" fill="none" {...props}>
      <g clipPath="url(#9yq-a)">
        <path d="M1.003 4h12l2 1.5-2 1.5h-12V4Z" fill="#FFD02F" />
        <path
          d="M7.503.5a.5.5 0 0 0-1 0h1Zm-7 3V3a.5.5 0 0 0-.5.5h.5Zm0 4h-.5a.5.5 0 0 0 .5.5v-.5Zm6 8a.5.5 0 0 0 1 0h-1Zm6-8V8a.5.5 0 0 0 .277-.084l-.277-.416Zm3-2 .277.416a.5.5 0 0 0 0-.832l-.277.416Zm-3-2 .277-.416A.5.5 0 0 0 12.503 3v.5Zm-6-3v3h1v-3h-1Zm.5 2.5h-6.5v1h6.5V3Zm-7 .5v4h1v-4h-1Zm.5 4.5h6.5V7h-6.5v1Zm6-.5v8h1v-8h-1Zm.5.5h5.5V7h-5.5v1Zm5.777-.084 3-2-.554-.832-3 2 .554.832Zm3-2.832-3-2-.554.832 3 2 .554-.832ZM12.503 3h-5.5v1h5.5V3Z"
          fill="#1D2126"
        />
      </g>
      <defs>
        <clipPath id="9yq-a">
          <path fill="#fff" transform="translate(.003)" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

Direction.defaultProps = {
  height: 16,
  width: 16,
};
export default Direction;
