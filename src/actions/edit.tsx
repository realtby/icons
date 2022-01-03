import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Edit = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.954.391a1.335 1.335 0 011.887 0l1.77 1.77a1.334 1.334 0 010 1.888l-1.475 1.476-.011.01-9.727 9.728a.498.498 0 01-.264.138l-.008.002-3.54.59a.5.5 0 01-.576-.576l.59-3.54a.5.5 0 01.153-.285l9.725-9.725.012-.011L11.954.39zm1.18.708a.335.335 0 00-.473 0L11.539 2.22l2.244 2.244 1.122-1.122a.335.335 0 000-.473l-1.77-1.77zM1.801 11.958l2.244 2.243 9.03-9.03-2.243-2.245L1.8 11.958zm-.69 2.932L1.427 13l1.576 1.577-1.892.315z"
      />
    </svg>
  );
};

Edit.defaultProps = {
  height: 16,
  width: 16,
};
export default Edit;
