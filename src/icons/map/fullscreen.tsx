import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Fullscreen = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.597 2h4.95a.594.594 0 0 1 0 1.188H4.031l5.917 5.917a.594.594 0 0 1-.84.84L3.19 4.028v3.517a.594.594 0 0 1-1.188 0v-4.95c0-.329.266-.595.594-.595Zm13.267.594c0-.328.266-.594.594-.594h4.95c.329 0 .595.266.595.594v4.95a.594.594 0 1 1-1.188 0V4.029l-5.917 5.917a.594.594 0 0 1-.84-.84l5.917-5.917h-3.517a.594.594 0 0 1-.594-.594ZM9.948 14.055a.594.594 0 0 1 0 .84L4.03 20.812h3.516a.594.594 0 0 1 0 1.188h-4.95a.594.594 0 0 1-.594-.594v-4.95a.594.594 0 0 1 1.188 0v3.516l5.917-5.917a.594.594 0 0 1 .84 0Zm4.11 0a.594.594 0 0 1 .84 0l5.917 5.917v-3.517a.594.594 0 0 1 1.188 0v4.95a.594.594 0 0 1-.594.595h-4.95a.594.594 0 0 1 0-1.188h3.516l-5.917-5.917a.594.594 0 0 1 0-.84Z"
      />
    </svg>
  );
};

Fullscreen.defaultProps = {
  height: 24,
  width: 24,
};
export default Fullscreen;
