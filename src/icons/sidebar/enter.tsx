import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Enter = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 24 22" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.003 1.5c0-.828-.676-1.5-1.51-1.5H6.397c-.834 0-1.51.672-1.51 1.5v3c0 .276.226.5.504.5a.502.502 0 0 0 .503-.5v-3c0-.276.225-.5.503-.5h15.096c.278 0 .504.224.504.5v19c0 .276-.226.5-.504.5H6.397a.502.502 0 0 1-.503-.5v-4c0-.276-.225-.5-.503-.5a.502.502 0 0 0-.503.5v4c0 .828.675 1.5 1.51 1.5h15.095c.834 0 1.51-.672 1.51-1.5v-19ZM10.214 7.146a.505.505 0 0 1 .712 0l3.02 3a.498.498 0 0 1 0 .708l-3.02 3a.506.506 0 0 1-.712 0 .498.498 0 0 1 0-.708L12.374 11H.507a.502.502 0 0 1-.503-.5c0-.276.225-.5.503-.5h11.869l-2.16-2.146a.498.498 0 0 1 0-.708Z"
      />
    </svg>
  );
};

Enter.defaultProps = {
  height: 16,
  width: 16,
};
export default Enter;
