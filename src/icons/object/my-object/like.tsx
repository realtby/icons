import * as React from 'react';
import type { IconProps } from '../../../core';
import { castIconProps } from '../../../core';

const Like = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 14 14" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.701 4.285 7 5l-.712-.703-.004-.003-.02-.02a7.444 7.444 0 0 0-.459-.391 6.678 6.678 0 0 0-1.214-.768c-.477-.227-.924-.343-1.306-.321-.34.02-.685.15-1.028.56-.595.714-.66 1.445-.394 2.255.287.871.96 1.802 1.82 2.692.845.876 1.803 1.643 2.558 2.196.287.21.542.387.747.525.208-.141.468-.322.761-.536.764-.56 1.73-1.335 2.583-2.217.867-.897 1.541-1.828 1.823-2.693.26-.798.188-1.51-.419-2.203-.371-.425-.738-.56-1.087-.58-.387-.022-.83.096-1.297.32-.46.22-.876.515-1.185.763a7.03 7.03 0 0 0-.444.388l-.02.02-.002.002Zm-.712 7.928s-8.903-5.417-5.5-9.5c2.083-2.5 5.5.87 5.5.87s3.313-3.37 5.5-.87c3.5 4-5.5 9.5-5.5 9.5Z"
      />
    </svg>
  );
};

Like.defaultProps = {
  height: 14,
  width: 14,
};
export default Like;
