import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const OffersStorage = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 40 40" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.731 2.164a.5.5 0 0 0-.442.005l-17.012 8.62a.5.5 0 0 0-.274.445V37.5a.5.5 0 0 0 .5.5h4.5V15.5a1.5 1.5 0 0 1 1.5-1.5h23a1.5 1.5 0 0 1 1.5 1.5V38h4.5a.5.5 0 0 0 .5-.5V11.25a.5.5 0 0 0-.284-.451L19.731 2.164ZM32.003 38V21h-24v17h8v-4.5a1.5 1.5 0 0 1 1.5-1.5h4.5v-4.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5V38h3Zm-4 0v-5h-5v5h5Zm-6 0v-5h-4.5a.5.5 0 0 0-.5.5V38h5Zm1-6h5v-4.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5V32Zm-15-12h24v-2h-24v2Zm0-3h24v-1.5a.5.5 0 0 0-.5-.5h-23a.5.5 0 0 0-.5.5V17ZM18.837 1.277a1.5 1.5 0 0 1 1.327-.014l17.988 8.634c.52.25.85.775.85 1.352V37.5a1.5 1.5 0 0 1-1.5 1.5h-35a1.5 1.5 0 0 1-1.5-1.5V11.234a1.5 1.5 0 0 1 .823-1.338l17.012-8.62Z"
      />
    </svg>
  );
};

OffersStorage.defaultProps = {
  height: 16,
  width: 16,
};
export default OffersStorage;
