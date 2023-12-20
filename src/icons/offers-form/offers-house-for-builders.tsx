import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const OffersHouseForBuilders = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 40 40" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.201 2.13a.5.5 0 0 0-.396 0l-17.5 7.568a.5.5 0 0 0-.302.46V37.5a.5.5 0 0 0 .5.5h35a.5.5 0 0 0 .5-.5V10.157a.5.5 0 0 0-.302-.459l-17.5-7.567Zm-.793-.917a1.5 1.5 0 0 1 1.19 0l17.5 7.567a1.5 1.5 0 0 1 .905 1.377V37.5a1.5 1.5 0 0 1-1.5 1.5h-35a1.5 1.5 0 0 1-1.5-1.5V10.157a1.5 1.5 0 0 1 .905-1.377l17.5-7.567Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.503 14a.5.5 0 0 1 .5.5V18h4.5a2.5 2.5 0 0 1 2.5 2.5v.5h19v-2.5a.5.5 0 0 1 1 0v17a.5.5 0 1 1-1 0V31h-3v4.5a.5.5 0 1 1-1 0V34h-4v1.5a.5.5 0 1 1-1 0V31h-17v4.5a.5.5 0 0 1-1 0v-21a.5.5 0 0 1 .5-.5Zm.5 16h6v-.5a1.5 1.5 0 0 0-1.5-1.5h-4.5v2Zm0-3h4.5a2.5 2.5 0 0 1 2.5 2.5v.5h10v-8h-17v5Zm0-6h6v-.5a1.5 1.5 0 0 0-1.5-1.5h-4.5v2Zm18 1v2h4v-2h-4Zm5 0v8h3v-8h-3Zm-1 8v-2h-4v2h4Zm-4 1v2h4v-2h-4Zm0-4h4v-2h-4v2Z"
      />
    </svg>
  );
};

OffersHouseForBuilders.defaultProps = {
  height: 16,
  width: 16,
};
export default OffersHouseForBuilders;
