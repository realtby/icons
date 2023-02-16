import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const TelegramWhite = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M9.305 20.021c-.65 0-.533-.25-.767-.867l-1.9-6.266 11.8-7.367 1.384.367-1.15 3.133-9.367 11Z"
        fill="#C8DAEA"
      />
      <path
        d="M9.306 20.021c.5 0 .717-.233 1-.5.434-.416 6-5.833 6-5.833l-3.417-.833-3.166 2-.417 5v.166Z"
        fill="#A9C9DD"
      />
      <path
        d="m9.639 14.921 8.066 5.95c.917.5 1.584.25 1.817-.85l3.283-15.466c.334-1.35-.516-1.95-1.4-1.55L2.14 10.438c-1.317.533-1.3 1.266-.234 1.583l4.95 1.55 11.45-7.216c.534-.334 1.034-.15.634.216l-9.3 8.35Z"
        fill="url(#4tg-a)"
      />
      <defs>
        <linearGradient
          id="4tg-a"
          x1={14.471}
          y1={11.48}
          x2={18.637}
          y2={18.147}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EFF7FC" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
      </defs>
    </svg>
  );
};

TelegramWhite.defaultProps = {
  height: 24,
  width: 24,
};
export default TelegramWhite;
