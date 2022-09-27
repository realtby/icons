import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Close = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 10 10" fill="none" {...props}>
      <path d="M9.759 1.423A.833.833 0 1 0 8.58.244L5.003 3.821 1.426.244A.833.833 0 1 0 .247 1.423L3.824 5 .247 8.577a.833.833 0 1 0 1.179 1.179l3.577-3.577L8.58 9.756A.833.833 0 1 0 9.76 8.577L6.18 5 9.76 1.423Z" />
    </svg>
  );
};

Close.defaultProps = {
  height: 16,
  width: 16,
};
export default Close;
