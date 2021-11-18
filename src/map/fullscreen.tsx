import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Fullscreen = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);
  return (
    <svg viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.597 0h4.95a.594.594 0 110 1.188H2.031l5.917 5.917a.594.594 0 01-.84.84L1.19 2.028v3.517a.594.594 0 01-1.188 0V.595C.003.265.269 0 .597 0zm13.267.594c0-.328.266-.594.594-.594h4.95c.329 0 .595.266.595.594v4.95a.594.594 0 11-1.188 0V2.029l-5.917 5.917a.594.594 0 11-.84-.84l5.917-5.917h-3.517a.594.594 0 01-.594-.594zM7.948 12.055a.594.594 0 010 .84L2.03 18.812h3.516a.594.594 0 010 1.188H.597a.594.594 0 01-.594-.594v-4.95a.594.594 0 011.188 0v3.516l5.917-5.917a.594.594 0 01.84 0zm4.11 0a.594.594 0 01.84 0l5.917 5.917v-3.517a.594.594 0 011.188 0v4.95a.594.594 0 01-.594.595h-4.95a.594.594 0 010-1.188h3.516l-5.917-5.917a.594.594 0 010-.84z"
        fill="#1D2126"
      />
    </svg>
  );
};

Fullscreen.defaultProps = {
  height: 16,
  width: 16,
};
export default Fullscreen;
