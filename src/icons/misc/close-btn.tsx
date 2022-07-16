import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const CloseBtn = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.076 4.076a.6.6 0 0 1 .848 0L12 11.152l7.076-7.076a.6.6 0 0 1 .848.848L12.848 12l7.076 7.076a.6.6 0 1 1-.848.848L12 12.85l-7.076 7.075a.6.6 0 0 1-.848-.848L11.15 12 4.076 4.924a.6.6 0 0 1 0-.848Z"
      />
    </svg>
  );
};

CloseBtn.defaultProps = {
  height: 24,
  width: 24,
};
export default CloseBtn;
