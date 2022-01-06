import * as React from 'react';
import type { IconProps } from '../../../core';
import { castIconProps } from '../../../core';

const Pedestrian = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 13 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM3.5 2.5a2.5 2.5 0 1 1 4.44 1.59l3.32 2.32a1.75 1.75 0 0 1-2 2.87L8 8.44v.53l2.28 2.26a2.5 2.5 0 0 1 .28.32l.13.18c.2.29.32.64.32 1.02v1.5a1.75 1.75 0 0 1-3.5 0v-.86l-1.04-1.06-2.55 3.03a1.75 1.75 0 0 1-2.68-2.25L4 9.81v-1.4l-1.25.87a1.75 1.75 0 1 1-2-2.87L4.07 4.1a2.49 2.49 0 0 1-.57-1.6zm1.4 2.24-3.57 2.5a.75.75 0 1 0 .86 1.22l2.03-1.4a.5.5 0 0 1 .79.4V10a.5.5 0 0 1-.12.32l-2.88 3.44a.75.75 0 1 0 1.15.96l2.9-3.46a.5.5 0 0 1 .75-.02l1.57 1.6a.5.5 0 0 1 .14.35v1.06a.75.75 0 0 0 1.5 0v-1.5a.74.74 0 0 0-.14-.44l-.13-.18a1.5 1.5 0 0 0-.16-.2l-2.43-2.4A.5.5 0 0 1 7 9.18V7.5a.5.5 0 0 1 .78-.41l2.03 1.37a.75.75 0 0 0 .87-1.23L7.12 4.74A2.5 2.5 0 0 1 6.01 5c-.4 0-.78-.1-1.12-.26z"
      />
    </svg>
  );
};

Pedestrian.defaultProps = {
  height: 16,
  width: 16,
};
export default Pedestrian;
