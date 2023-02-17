import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const EmailW = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 22 22" {...props}>
      <path d="m14.258 11.865-1.842 1.753c-.748.711-2.062.727-2.825 0l-1.843-1.753-6.618 6.296c.247.108.518.172.807.172h18.132a2 2 0 0 0 .807-.172l-6.618-6.296Z" />
      <path d="M20.07 3.667H1.936c-.289 0-.56.064-.807.172l7.072 6.728h.001v.002l2.3 2.187c.245.232.756.232 1 0l2.299-2.187.001-.002h.002l7.07-6.728a2 2 0 0 0-.806-.172ZM.209 4.693a1.736 1.736 0 0 0-.206.806v11c0 .291.078.563.206.807L6.838 11 .208 4.693ZM21.797 4.693 15.168 11l6.63 6.306c.127-.244.205-.516.205-.806v-11c0-.292-.078-.563-.206-.807Z" />
    </svg>
  );
};

EmailW.defaultProps = {
  height: 22,
  width: 22,
};
export default EmailW;
