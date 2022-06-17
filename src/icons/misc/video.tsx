import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Video = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 18 14" {...props}>
      <path d="M.534 1V.5a.5.5 0 0 0-.5.499l.5.001ZM.503 13l-.5-.001a.5.5 0 0 0 .5.501V13Zm16.996 0v.5a.5.5 0 0 0 .5-.5h-.5Zm0-12h.5a.5.5 0 0 0-.5-.5V1ZM7.026 4.5l.224-.447a.5.5 0 0 0-.724.447h.5Zm0 5h-.5a.5.5 0 0 0 .724.447L7.026 9.5Zm5-2.5.224.447a.5.5 0 0 0 0-.894L12.026 7ZM.034.999l-.031 12 1 .002.031-12-1-.002ZM.503 13.5h16.996v-1H.503v1Zm17.496-.5V1h-1v12h1Zm-.5-12.5H.534v1H17.5v-1Zm-10.973 4v5h1v-5h-1Zm.724 5.447 5-2.5-.447-.894-5 2.5.447.894Zm5-3.394-5-2.5-.447.894 5 2.5.447-.894Z" />
    </svg>
  );
};

Video.defaultProps = {
  height: 16,
  width: 16,
};
export default Video;
