import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const NumberPhone = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.356.102C3.679-.296 4.863.523 5.623 1.29c.662.667 1.189 1.422 1.313 2.227v.002c.12.807-.157 1.625-.956 2.429a4.169 4.169 0 01-.646.539c.157.212.322.424.494.637a20.848 20.848 0 003.694 3.544c.144-.219.322-.436.535-.649.798-.803 1.614-1.086 2.422-.966.79.119 1.525.619 2.188 1.28.414.414.762.853.998 1.314.27.526.408 1.089.305 1.7-.096.568-.398 1.12-.925 1.65-.743.748-1.538 1.052-2.332.999-1.136.006-2.493-.438-3.888-1.2-1.412-.772-2.904-1.894-4.305-3.293C2.29 9.277.743 6.8.212 4.767c-.177-.677-.31-1.5-.118-2.283C.23 1.924.53 1.439.997.969c.202-.203.408-.374.618-.513.243-.16.49-.278.74-.354z"
      />
    </svg>
  );
};

NumberPhone.defaultProps = {
  height: 16,
  width: 16,
};
export default NumberPhone;
