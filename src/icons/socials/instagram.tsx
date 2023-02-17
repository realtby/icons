import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Instagram = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 22 22" {...props}>
      <path
        d="M14.44 1.833H7.567a5.73 5.73 0 0 0-5.73 5.73v6.874a5.73 5.73 0 0 0 5.73 5.73h6.875a5.73 5.73 0 0 0 5.729-5.73V7.562a5.73 5.73 0 0 0-5.73-5.729Zm4.011 12.604a4.015 4.015 0 0 1-4.01 4.01H7.566a4.015 4.015 0 0 1-4.01-4.01V7.562a4.015 4.015 0 0 1 4.01-4.01h6.875a4.015 4.015 0 0 1 4.01 4.01v6.875Z"
        fill="url(#5vw-a)"
      />
      <path
        d="M11.003 6.417a4.584 4.584 0 1 0 0 9.167 4.584 4.584 0 0 0 0-9.167Zm0 7.448A2.869 2.869 0 0 1 8.138 11a2.868 2.868 0 0 1 2.865-2.864A2.868 2.868 0 0 1 13.867 11a2.869 2.869 0 0 1-2.864 2.865Z"
        fill="url(#5vw-b)"
      />
      <path d="M15.93 6.684a.61.61 0 1 0 0-1.222.61.61 0 0 0 0 1.222Z" fill="url(#5vw-c)" />
      <defs>
        <linearGradient
          id="5vw-a"
          x1={3.515}
          y1={18.488}
          x2={18.491}
          y2={3.511}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC107" />
          <stop offset={0.507} stopColor="#F44336" />
          <stop offset={0.99} stopColor="#9C27B0" />
        </linearGradient>
        <linearGradient
          id="5vw-b"
          x1={7.762}
          y1={14.241}
          x2={14.244}
          y2={7.759}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC107" />
          <stop offset={0.507} stopColor="#F44336" />
          <stop offset={0.99} stopColor="#9C27B0" />
        </linearGradient>
        <linearGradient
          id="5vw-c"
          x1={15.498}
          y1={6.505}
          x2={16.362}
          y2={5.641}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC107" />
          <stop offset={0.507} stopColor="#F44336" />
          <stop offset={0.99} stopColor="#9C27B0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

Instagram.defaultProps = {
  height: 22,
  width: 22,
};
export default Instagram;
