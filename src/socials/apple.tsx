import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Apple = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11.94 6.544c-.853 0-2.175-.974-3.566-.939-1.835.024-3.519 1.068-4.466 2.723-1.905 3.32-.49 8.226 1.368 10.925.912 1.314 1.988 2.793 3.414 2.746 1.368-.059 1.882-.892 3.542-.892 1.649 0 2.116.892 3.566.857 1.473-.024 2.408-1.338 3.309-2.664a11.812 11.812 0 001.496-3.087c-.035-.011-2.864-1.103-2.9-4.388-.023-2.746 2.233-4.06 2.339-4.12-1.286-1.889-3.262-2.1-3.952-2.147-1.8-.14-3.308.986-4.15.986zm3.028-3.082c.76-.915 1.262-2.195 1.122-3.462-1.087.047-2.396.728-3.18 1.643-.701.81-1.309 2.112-1.145 3.356 1.204.094 2.443-.622 3.203-1.537z"
        fill="#333"
      />
    </svg>
  );
};

Apple.defaultProps = {
  height: 16,
  width: 16,
};
export default Apple;
