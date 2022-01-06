import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const EditFill = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" {...props}>
      <path d="M13.84.4a1.33 1.33 0 0 0-1.89 0l-1.34 1.35 3.65 3.65 1.35-1.35a1.33 1.33 0 0 0 0-1.89L13.84.4z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.9 2.45.75 11.6a.5.5 0 0 0-.15.29L0 15.42a.5.5 0 0 0 .58.57l3.55-.59a.5.5 0 0 0 .27-.14l9.15-9.15L9.9 2.45zM1.43 13l-.32 1.9 1.9-.32L1.42 13z"
      />
    </svg>
  );
};

EditFill.defaultProps = {
  height: 16,
  width: 16,
};
export default EditFill;
