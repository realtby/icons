import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const OffersLiving = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 40 40" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 2.5a.5.5 0 0 1 .5-.5h18a.5.5 0 0 1 .5.5V12h17.5a.5.5 0 0 1 .5.5v25a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5V30h-5v7.5a.5.5 0 0 1-.5.5h-12a.5.5 0 0 1-.5-.5V30H8v7.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-35ZM20 13v24h5v-7.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5V37h5V13H20Zm-1 24V3H2v34h5v-7.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5V37h5ZM16 9.497a.5.5 0 0 1-.497.503L13 10.014v2.503a.5.5 0 1 1-1 0v-3a.5.5 0 0 1 .497-.5l3-.017a.5.5 0 0 1 .503.497Zm-11 .02a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H6v2.5a.5.5 0 1 1-1 0v-3Zm11 9.964a.5.5 0 0 1-.497.502L13 19.997V22.5a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .497-.5l3-.017a.5.5 0 0 1 .503.498Zm7 .002a.5.5 0 0 1 .5-.5h3a.5.5 0 1 1 0 1H24V22.5a.5.5 0 0 1-1 0v-3.017Zm7.147-.354a.5.5 0 0 1 .356-.146l3 .017a.5.5 0 1 1-.006 1L31 19.986V22.5a.5.5 0 0 1-1 0v-3.017a.5.5 0 0 1 .147-.354ZM5 19.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H6v2.5a.5.5 0 0 1-1 0v-3Z"
      />
    </svg>
  );
};

OffersLiving.defaultProps = {
  height: 16,
  width: 16,
};
export default OffersLiving;
