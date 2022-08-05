import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const EditLargeBold = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.289.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-16.5 16.5a1 1 0 0 1-.444.258l-5.5 1.5a1 1 0 0 1-1.228-1.228l1.5-5.5a1 1 0 0 1 .258-.444l16.5-16.5Zm.707 2.121L3.91 17.5l2.586 2.586L21.582 5l-2.586-2.586ZM4.571 20.99l-1.564-1.563-.586 2.149 2.15-.586Z"
      />
    </svg>
  );
};

EditLargeBold.defaultProps = {
  height: 24,
  width: 24,
};
export default EditLargeBold;
