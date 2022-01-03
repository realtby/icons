import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Key = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M.503 12.5l-.354-.354a.5.5 0 00-.146.354h.5zm0 3h-.5a.5.5 0 00.5.5v-.5zm3 0v.5a.5.5 0 00.5-.5h-.5zm0-2V13a.5.5 0 00-.5.5h.5zm2 0v.5a.5.5 0 00.5-.5h-.5zm0-2V11a.5.5 0 00-.5.5h.5zm2 0v.5a.5.5 0 00.353-.146l-.353-.354zM5.8 7.202l.354.354.225-.225-.108-.298-.47.17zm3 3l.17-.47-.298-.108-.225.225.353.354zM.003 12.5v3h1v-3h-1zm.5 3.5h3v-1h-3v1zm3.5-.5v-2h-1v2h1zm-.5-1.5h2v-1h-2v1zm2.5-.5v-2h-1v2h1zm-.5-1.5h2v-1h-2v1zM7.32 2.318a4.5 4.5 0 016.364 0l.707-.707a5.5 5.5 0 00-7.778 0l.707.707zm6.364 0a4.5 4.5 0 010 6.364l.707.707a5.5 5.5 0 000-7.778l-.707.707zM6.27 7.033a4.5 4.5 0 011.05-4.715l-.707-.707A5.5 5.5 0 005.33 7.372l.94-.34zm-.824-.184L.149 12.146l.707.708 5.298-5.298-.707-.707zm8.238 1.833a4.5 4.5 0 01-4.715 1.05l-.34.94a5.5 5.5 0 005.762-1.283l-.707-.707zm-5.829 3.172l1.298-1.298-.707-.707-1.298 1.297.707.708zM13.003 4a1 1 0 01-1 1v1a2 2 0 002-2h-1zm-1 1a1 1 0 01-1-1h-1a2 2 0 002 2V5zm-1-1a1 1 0 011-1V2a2 2 0 00-2 2h1zm1-1a1 1 0 011 1h1a2 2 0 00-2-2v1z" />
    </svg>
  );
};

Key.defaultProps = {
  height: 16,
  width: 16,
};
export default Key;
