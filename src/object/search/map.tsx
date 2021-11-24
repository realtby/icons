import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Map = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.28.053a.5.5 0 01.36-.034l6.842 1.955L15.327.532a.5.5 0 01.676.468v12.5a.5.5 0 01-.277.447l-4 2a.5.5 0 01-.36.034l-6.842-1.955-3.846 1.442A.5.5 0 01.003 15V2.5a.5.5 0 01.276-.447l4-2zm.723 13.07l6.45 1.843 3.55-1.775V1.721l-3 1.125V11.5a.5.5 0 11-1 0V2.877l-6.45-1.843-3.55 1.775v11.47l3-1.126V4.5a.5.5 0 011 0v8.623z"
        fill="#000"
      />
    </svg>
  );
};

Map.defaultProps = {
  height: 16,
  width: 16,
};
export default Map;
