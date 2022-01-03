import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Calendar = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.503 0a.5.5 0 01.5.5V1h6V.5a.5.5 0 011 0V1h1.5a2.5 2.5 0 012.5 2.5v10a2.5 2.5 0 01-2.5 2.5h-11a2.5 2.5 0 01-2.5-2.5v-10a2.5 2.5 0 012.5-2.5h1.5V.5a.5.5 0 01.5-.5zm-.5 2h-1.5a1.5 1.5 0 00-1.5 1.5V5h14V3.5a1.5 1.5 0 00-1.5-1.5h-1.5v.5a.5.5 0 11-1 0V2h-6v.5a.5.5 0 01-1 0V2zm11 4h-14v7.5a1.5 1.5 0 001.5 1.5h11a1.5 1.5 0 001.5-1.5V6z"
      />
    </svg>
  );
};

Calendar.defaultProps = {
  height: 16,
  width: 16,
};
export default Calendar;
