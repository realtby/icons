import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const NumberMTS = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M2.736 3.328h0l.002-.002c.546-.928 1.143-1.647 1.724-2.128C5.049.712 5.579.5 6.002.5c.423 0 .951.212 1.54.7.581.483 1.18 1.203 1.735 2.128 1.143 1.93 1.826 4.314 1.826 6.36 0 1.488-.412 2.95-1.247 4.029C9.034 14.779 7.78 15.5 6.003 15.5c-1.782 0-3.036-.72-3.857-1.783C1.314 12.64.904 11.18.903 9.694a13.02 13.02 0 011.833-6.366z"
        fill="#E30613"
        stroke="#E30613"
      />
    </svg>
  );
};

NumberMTS.defaultProps = {
  height: 16,
  width: 16,
};
export default NumberMTS;
