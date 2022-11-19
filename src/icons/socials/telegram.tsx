import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Telegram = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 22 22" {...props}>
      <path d="m8.113 13.43-.303 4.265c.434 0 .622-.186.847-.41l2.034-1.944 4.215 3.087c.773.43 1.318.204 1.527-.711l2.766-12.965h.001c.245-1.143-.413-1.59-1.166-1.31L1.77 9.67c-1.11.43-1.094 1.05-.19 1.33l4.159 1.293 9.658-6.043c.454-.301.867-.135.527.166L8.113 13.43Z" />
    </svg>
  );
};

Telegram.defaultProps = {
  height: 22,
  width: 22,
};
export default Telegram;
