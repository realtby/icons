import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Professional = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.77.56a.5.5 0 0 1 .47 0l7.5 4a.5.5 0 0 1 0 .88l-7.5 4a.5.5 0 0 1-.47 0l-7.5-4a.5.5 0 0 1 0-.88l7.5-4zM15 7a.5.5 0 0 1 .5.5V14a.5.5 0 1 1-1 0V7.5A.5.5 0 0 1 15 7zM2.75 8.07a.5.5 0 0 1 .5 0L8 10.72l4.76-2.67a.5.5 0 0 1 .74.44V12a.5.5 0 0 1-.05.22C12.91 13.3 11.47 15.5 8 15.5s-4.9-2.2-5.44-3.28A.5.5 0 0 1 2.5 12V8.5a.5.5 0 0 1 .25-.43z"
      />
      <path d="M16 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
    </svg>
  );
};

Professional.defaultProps = {
  height: 16,
  width: 16,
};
export default Professional;
