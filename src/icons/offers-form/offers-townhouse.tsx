import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const OffersTownhouse = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 40 40" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 2a.5.5 0 0 1 .408.211l8.5 12A.5.5 0 0 1 20 14.5v23a.5.5 0 0 1-.5.5H14a.5.5 0 0 1-.5-.5V29h-5v8.5a.5.5 0 0 1-.5.5H2.5a.5.5 0 0 1-.5-.5v-23a.5.5 0 0 1 .092-.289l8.5-12A.5.5 0 0 1 11 2ZM3 14.66V37h4.5v-8.5A.5.5 0 0 1 8 28h6a.5.5 0 0 1 .5.5V37H19V14.66L11 3.364 3 14.659Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 2a.5.5 0 0 1 .408.211l8.5 12A.5.5 0 0 1 37 14.5v23a.5.5 0 0 1-.5.5H31a.5.5 0 0 1-.5-.5V29h-5v8.5a.5.5 0 0 1-.5.5h-5.5a.5.5 0 0 1-.5-.5v-23a.5.5 0 0 1 .092-.289l8.5-12A.5.5 0 0 1 28 2Zm-8 12.66V37h4.5v-8.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5V37H36V14.66L28 3.364l-8 11.294ZM8.583 16.5a.083.083 0 0 0-.083.083v4.834c0 .046.037.083.083.083H10.5v-5H8.583Zm2.917 0v2h2v-1.917a.083.083 0 0 0-.083-.083H11.5Zm2 3h-2v2h1.917a.083.083 0 0 0 .083-.083V19.5Zm-6-2.917c0-.598.485-1.083 1.083-1.083h4.834c.598 0 1.083.485 1.083 1.083v4.834c0 .598-.485 1.083-1.083 1.083H8.583A1.083 1.083 0 0 1 7.5 21.417v-4.834Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.583 16.5a.083.083 0 0 0-.083.083v4.834c0 .046.037.083.083.083H27.5v-5h-1.917Zm2.917 0v2h2v-1.917a.083.083 0 0 0-.083-.083H28.5Zm2 3h-2v2h1.917a.083.083 0 0 0 .083-.083V19.5Zm-6-2.917c0-.598.485-1.083 1.083-1.083h4.834c.598 0 1.083.485 1.083 1.083v4.834c0 .598-.485 1.083-1.083 1.083h-4.834a1.083 1.083 0 0 1-1.083-1.083v-4.834Z"
      />
    </svg>
  );
};

OffersTownhouse.defaultProps = {
  height: 16,
  width: 16,
};
export default OffersTownhouse;
