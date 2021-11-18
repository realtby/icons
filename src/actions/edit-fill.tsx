import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const EditFill = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);
  return (
    <svg viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M13.841.391a1.335 1.335 0 00-1.887 0l-1.348 1.355 3.655 3.655 1.35-1.352a1.334 1.334 0 000-1.887l-1.77-1.77z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.9 2.454L.752 11.592a.5.5 0 00-.153.284l-.59 3.541a.5.5 0 00.575.576l3.541-.59.008-.002a.498.498 0 00.264-.138l9.155-9.155L9.9 2.454zM1.426 12.999l-.316 1.892 1.892-.315-1.576-1.577z"
        fill="#000"
      />
    </svg>
  );
};

EditFill.defaultProps = {
  height: 16,
  width: 16,
};
export default EditFill;
