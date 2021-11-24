import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Bus = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3.003 10a1 1 0 100 2 1 1 0 000-2zM9.003 10a1 1 0 100 2 1 1 0 000-2z"
        fill="#5B6473"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.503 14h-1v1c0 .408-.294.668-.545.798-.266.137-.6.202-.955.202s-.69-.065-.955-.202c-.251-.13-.545-.39-.545-.798v-1h-3v1c0 .406-.29.666-.544.797-.265.138-.6.203-.956.203s-.691-.065-.957-.203c-.252-.13-.543-.39-.543-.797v-1h-1a.5.5 0 01-.5-.5v-11a2.5 2.5 0 012.5-2.5h7a2.5 2.5 0 012.5 2.5v11a.5.5 0 01-.5.5zM1.003 2.5a1.5 1.5 0 011.5-1.5h7a1.5 1.5 0 011.5 1.5V8h-10V2.5zm0 6.5h10v4h-10V9zm7.5 5.907V14h1v.907l-.005.002c-.085.044-.25.091-.495.091s-.41-.047-.495-.09l-.005-.003zm-6-.907h1v.908l-.004.002c-.084.043-.249.09-.496.09s-.412-.047-.496-.09l-.004-.002V14z"
        fill="#5B6473"
      />
    </svg>
  );
};

Bus.defaultProps = {
  height: 16,
  width: 16,
};
export default Bus;
