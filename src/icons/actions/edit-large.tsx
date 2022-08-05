import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const EditLarge = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.146.146a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-18 18a.5.5 0 0 1-.256.136l-5 1a.5.5 0 0 1-.588-.588l1-5a.5.5 0 0 1 .136-.256l18-18ZM17.707 3 21 6.293 22.793 4.5 19.5 1.207 17.707 3Zm2.586 4L17 3.707 2.207 18.5 5.5 21.793 20.293 7ZM4.486 22.193l-2.679-2.679-.67 3.349 3.349-.67Z"
      />
    </svg>
  );
};

EditLarge.defaultProps = {
  height: 24,
  width: 24,
};
export default EditLarge;
