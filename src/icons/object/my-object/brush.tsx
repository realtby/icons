import * as React from 'react';
import type { IconProps } from '../../../core';
import { castIconProps } from '../../../core';

const Brush = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 14 14" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.609 2.167a.62.62 0 0 0-.106.333v4h-3.5c-.237 0-.337.088-.394.167A.62.62 0 0 0 2.503 7v1h9V7c0-.237-.088-.337-.167-.394a.62.62 0 0 0-.333-.106h-3.5v-4a.62.62 0 0 0-.106-.333C7.34 2.087 7.24 2 7.003 2c-.237 0-.337.088-.394.167ZM10.503 9h-7v3h.75l1.17-1.56c.346-.461 1.08-.217 1.08.36V12h4V9Zm-8 0v3.4a.6.6 0 0 0 .6.6h1.35a.6.6 0 0 0 .48-.24l.57-.76v.4a.6.6 0 0 0 .6.6h4.8a.6.6 0 0 0 .6-.6V9h1V7c0-.563-.246-.963-.583-1.206a1.617 1.617 0 0 0-.917-.294h-2.5v-3c0-.247-.07-.606-.294-.917C7.966 1.246 7.566 1 7.003 1s-.963.246-1.206.583c-.224.311-.294.67-.294.917v3h-2.5c-.563 0-.963.246-1.206.583-.224.311-.294.67-.294.917v2h1Z"
      />
    </svg>
  );
};

Brush.defaultProps = {
  height: 14,
  width: 14,
};
export default Brush;
