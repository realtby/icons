import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const ShareMobile = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.003 2a1 1 0 0 1 .707.293l3.997 4a1 1 0 0 1-1.414 1.414l-2.29-2.292V16a1 1 0 1 1-2 0V5.413L8.707 7.707a1 1 0 0 1-1.414-1.414l4.003-4A1 1 0 0 1 12.003 2Zm-9 10a1 1 0 0 1 1 1v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6a1 1 0 1 1 2 0v6a3 3 0 0 1-3 3h-14a3 3 0 0 1-3-3v-6a1 1 0 0 1 1-1Z"
      />
    </svg>
  );
};

ShareMobile.defaultProps = {
  height: 24,
  width: 24,
};
export default ShareMobile;
