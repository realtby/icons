import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const DocSetting = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 24 23" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2a2 2 0 1 1 4 0h1.5a.5.5 0 0 1 .5.5V3h2.5A1.5 1.5 0 0 1 16 4.5v5.75c1.1-.6 2.75-.12 2.94 1.45.08.6.73.99 1.33.74a1.92 1.92 0 0 1 2.46.8c.44.76.4 1.84-.52 2.52a.91.91 0 0 0 0 1.48c.92.68.96 1.76.52 2.51a1.92 1.92 0 0 1-2.46.81.96.96 0 0 0-1.33.74c-.27 2.26-3.6 2.26-3.88 0a.96.96 0 0 0-1.32-.74c-.94.4-1.8.05-2.29-.56H1.5A1.5 1.5 0 0 1 0 18.5v-14A1.5 1.5 0 0 1 1.5 3H4v-.5a.5.5 0 0 1 .5-.5H6zM4 4H1.5a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .5.5h9.52c-.08-.62.14-1.28.78-1.76a.91.91 0 0 0 0-1.48 1.87 1.87 0 0 1-.52-2.51 1.92 1.92 0 0 1 2.45-.81.96.96 0 0 0 1.27-.52V4.5a.5.5 0 0 0-.5-.5H12v1.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5V4zm7-1H9.5a.5.5 0 0 1-.5-.5V2a1 1 0 0 0-2 0v.5a.5.5 0 0 1-.5.5H5v2h6V3zM3 9.5a.5.5 0 0 1 .5-.5h9a.5.5 0 1 1 0 1h-9a.5.5 0 0 1-.5-.5zm14.95 2.32c-.13-1.1-1.76-1.1-1.9 0a1.96 1.96 0 0 1-2.7 1.54.93.93 0 0 0-1.2.4c-.24.38-.2.86.24 1.2a1.91 1.91 0 0 1 0 3.08.87.87 0 0 0-.25 1.2c.23.4.68.62 1.2.4 1.2-.5 2.56.26 2.71 1.54.14 1.1 1.77 1.1 1.9 0a1.96 1.96 0 0 1 2.7-1.54c.53.22.99 0 1.21-.4a.87.87 0 0 0-.25-1.2 1.91 1.91 0 0 1 0-3.08.87.87 0 0 0 .25-1.2.93.93 0 0 0-1.2-.4 1.96 1.96 0 0 1-2.7-1.54zM3 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 1 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm14 .5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm-1.5.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"
      />
    </svg>
  );
};

DocSetting.defaultProps = {
  height: 16,
  width: 16,
};
export default DocSetting;
