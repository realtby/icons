import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const ExitDevices = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 25 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.15 2.146a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 1 1-.708-.708L22.296 5h-3.793a.5.5 0 0 1 0-1h3.793l-1.147-1.146a.5.5 0 0 1 0-.708zM.003 1.5a1.5 1.5 0 0 1 1.5-1.5h14a1.5 1.5 0 0 1 1.5 1.5v4a.5.5 0 1 1-1 0v-4a.5.5 0 0 0-.5-.5h-14a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h11a.5.5 0 1 1 0 1h-1.5v2h1.5a.5.5 0 1 1 0 1h-7a.5.5 0 0 1 0-1h1.5v-2h-5.5a1.5 1.5 0 0 1-1.5-1.5v-10zm8 11.5v2h2v-2h-2zm6-4.5a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-6zm1.5-.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-3zm-13.5 2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 1 1 0 1h-10a.5.5 0 0 1-.5-.5zm14 3a.5.5 0 0 1 .5-.5h1a.5.5 0 1 1 0 1h-1a.5.5 0 0 1-.5-.5z"
      />
    </svg>
  );
};

ExitDevices.defaultProps = {
  height: 16,
  width: 16,
};
export default ExitDevices;
