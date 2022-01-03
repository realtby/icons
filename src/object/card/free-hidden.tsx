import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const FreeHidden = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.908 5.976l-.981-.194a4.024 4.024 0 000-1.564l.98-.194a5.025 5.025 0 010 1.952zM9.16 2.222l-.831.556a4.027 4.027 0 00-1.105-1.105l.556-.83a5.027 5.027 0 011.38 1.379zM5.979.095l-.194.981a4.024 4.024 0 00-1.564 0l-.194-.98a5.024 5.024 0 011.952 0zM2.225.842l.556.831a4.027 4.027 0 00-1.105 1.105l-.83-.556A5.027 5.027 0 012.224.842zM.098 4.024a5.024 5.024 0 000 1.952l.981-.194a4.024 4.024 0 010-1.564L.1 4.024zm.747 3.754l.831-.556c.292.436.669.813 1.105 1.105l-.556.83a5.027 5.027 0 01-1.38-1.379zm3.182 2.127l.194-.981a4.024 4.024 0 001.564 0l.194.98a5.024 5.024 0 01-1.952 0zm3.754-.747l-.556-.831A4.027 4.027 0 008.33 7.222l.83.556a5.027 5.027 0 01-1.379 1.38z"
      />
    </svg>
  );
};

FreeHidden.defaultProps = {
  height: 16,
  width: 16,
};
export default FreeHidden;
