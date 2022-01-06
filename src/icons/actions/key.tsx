import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Key = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" {...props}>
      <path d="m.5 12.5-.35-.35a.5.5 0 0 0-.15.35h.5zm0 3H0a.5.5 0 0 0 .5.5v-.5zm3 0v.5a.5.5 0 0 0 .5-.5h-.5zm0-2V13a.5.5 0 0 0-.5.5h.5zm2 0v.5a.5.5 0 0 0 .5-.5h-.5zm0-2V11a.5.5 0 0 0-.5.5h.5zm2 0v.5a.5.5 0 0 0 .36-.15l-.36-.35zM5.8 7.2l.35.36.23-.23-.1-.3-.48.17zm3 3 .17-.47-.3-.1-.22.22.35.35zM0 12.5v3h1v-3H0zM.5 16h3v-1h-3v1zm3.5-.5v-2H3v2h1zM3.5 14h2v-1h-2v1zm2.5-.5v-2H5v2h1zM5.5 12h2v-1h-2v1zm1.82-9.68a4.5 4.5 0 0 1 6.36 0l.71-.7a5.5 5.5 0 0 0-7.78 0l.71.7zm6.36 0a4.5 4.5 0 0 1 0 6.36l.71.7a5.5 5.5 0 0 0 0-7.77l-.7.7zM6.27 7.03a4.5 4.5 0 0 1 1.05-4.71l-.7-.7a5.5 5.5 0 0 0-1.29 5.75l.94-.34zm-.82-.18-5.3 5.3.7.7 5.3-5.3-.7-.7zm8.23 1.83a4.5 4.5 0 0 1-4.71 1.05l-.34.94a5.5 5.5 0 0 0 5.76-1.28l-.7-.7zm-5.83 3.17 1.3-1.3-.7-.7-1.3 1.3.7.7zM13 4a1 1 0 0 1-1 1v1a2 2 0 0 0 2-2h-1zm-1 1a1 1 0 0 1-1-1h-1a2 2 0 0 0 2 2V5zm-1-1a1 1 0 0 1 1-1V2a2 2 0 0 0-2 2h1zm1-1a1 1 0 0 1 1 1h1a2 2 0 0 0-2-2v1z" />
    </svg>
  );
};

Key.defaultProps = {
  height: 16,
  width: 16,
};
export default Key;
