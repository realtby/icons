import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Brush = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        d="M9.606 5.167A.62.62 0 0 0 9.5 5.5v4H6c-.237 0-.337.088-.394.167A.62.62 0 0 0 5.5 10v1h9v-1c0-.237-.088-.337-.167-.394A.619.619 0 0 0 14 9.5h-3.5v-4a.619.619 0 0 0-.106-.333C10.337 5.087 10.237 5 10 5c-.237 0-.337.088-.394.167ZM13.5 12h-7v3h.75l1.17-1.56c.346-.461 1.08-.217 1.08.36V15h4v-3Zm-8 0v3.4a.6.6 0 0 0 .6.6h1.35a.6.6 0 0 0 .48-.24L8.5 15v.4a.6.6 0 0 0 .6.6h4.8a.6.6 0 0 0 .6-.6V12h1v-2c0-.563-.246-.963-.583-1.206A1.617 1.617 0 0 0 14 8.5h-2.5v-3c0-.247-.07-.606-.294-.917C10.963 4.246 10.563 4 10 4s-.963.246-1.206.583c-.224.311-.294.67-.294.917v3H6c-.563 0-.963.246-1.206.583-.224.311-.294.67-.294.917v2h1Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Brush.defaultProps = {
  height: 20,
  width: 20,
};
export default Brush;
