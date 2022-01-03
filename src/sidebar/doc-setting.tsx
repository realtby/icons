import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const DocSetting = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 24 23" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.003 2a2 2 0 114 0h1.5a.5.5 0 01.5.5V3h2.5a1.5 1.5 0 011.5 1.5v5.753c1.091-.605 2.748-.124 2.941 1.443.075.606.73.993 1.327.743 1.054-.442 2.012.053 2.456.807.445.757.404 1.832-.521 2.514a.914.914 0 000 1.48c.925.682.966 1.757.521 2.514-.444.754-1.402 1.249-2.456.807-.597-.25-1.252.137-1.327.743-.278 2.261-3.604 2.261-3.882 0-.075-.605-.73-.993-1.327-.743-.934.391-1.793.047-2.285-.561H1.503a1.5 1.5 0 01-1.5-1.5v-14a1.5 1.5 0 011.5-1.5h2.5v-.5a.5.5 0 01.5-.5h1.5zm-2 2h-2.5a.5.5 0 00-.5.5v14a.5.5 0 00.5.5h9.517c-.08-.617.135-1.284.78-1.76a.913.913 0 000-1.48c-.925-.682-.966-1.757-.521-2.514.444-.754 1.402-1.249 2.456-.807a.964.964 0 001.268-.515V4.5a.5.5 0 00-.5-.5h-2.5v1.5a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5V4zm7-1h-1.5a.5.5 0 01-.5-.5V2a1 1 0 00-2 0v.5a.5.5 0 01-.5.5h-1.5v2h6V3zm-8 6.5a.5.5 0 01.5-.5h9a.5.5 0 110 1h-9a.5.5 0 01-.5-.5zm14.949 2.319c-.135-1.092-1.763-1.092-1.898 0-.158 1.285-1.518 2.04-2.705 1.542-.529-.22-.98.006-1.208.393-.226.384-.199.869.252 1.2a1.913 1.913 0 010 3.091c-.45.332-.478.817-.252 1.201.227.387.68.614 1.207.393 1.188-.497 2.548.257 2.706 1.543.135 1.09 1.763 1.09 1.898 0 .158-1.286 1.518-2.04 2.705-1.543.528.22.98-.006 1.208-.392.226-.385.199-.87-.252-1.202a1.913 1.913 0 010-3.09c.45-.332.478-.817.252-1.201-.227-.387-.68-.614-1.208-.393-1.187.497-2.547-.257-2.705-1.543zm-14.95.681a.5.5 0 01.5-.5h7a.5.5 0 110 1h-7a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm14 .5a.5.5 0 10.001 1 .5.5 0 000-1zm-1.5.5a1.5 1.5 0 113.001 0 1.5 1.5 0 01-3 0z"
      />
    </svg>
  );
};

DocSetting.defaultProps = {
  height: 16,
  width: 16,
};
export default DocSetting;
