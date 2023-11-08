import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const OffersKey = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 40 40" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.83 6.173c-4.23-4.23-11.09-4.23-15.32 0-3.072 3.072-3.922 7.332-2.54 11.157a.5.5 0 0 1-.116.524L3 30.707V37h5v-4.5a.5.5 0 0 1 .5-.5H13v-4.5a.5.5 0 0 1 .5-.5h5.793l2.853-2.854a.5.5 0 0 1 .524-.116c3.825 1.382 8.088.535 11.16-2.536 4.23-4.231 4.23-11.09 0-15.321Zm-16.028-.707c4.621-4.621 12.114-4.621 16.735 0 4.621 4.621 4.621 12.114 0 16.735-3.269 3.269-7.799 4.235-11.905 2.874l-2.778 2.779A.5.5 0 0 1 19.5 28H14v4.5a.5.5 0 0 1-.5.5H9v4.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l12.78-12.778c-1.362-4.107-.393-8.633 2.876-11.902ZM28.57 8.533a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Zm-3.9 2.9a3.9 3.9 0 1 1 7.8 0 3.9 3.9 0 0 1-7.8 0Z"
      />
    </svg>
  );
};

OffersKey.defaultProps = {
  height: 16,
  width: 16,
};
export default OffersKey;
