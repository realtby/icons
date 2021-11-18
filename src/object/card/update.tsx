import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Update = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);
  return (
    <svg viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1.117 1.916l-.18-.775a.475.475 0 00-.484-.38.484.484 0 00-.435.606l.47 2.004c.061.26.315.42.569.359l1.948-.48c.614-.153.39-1.1-.223-.947l-.937.232A3.983 3.983 0 014.573.98C6.795.736 8.778 2.385 9.015 4.67c.051.666 1.03.558.941-.104C9.683 1.934 7.505-.027 4.731 0 3.102.166 1.918.885 1.117 1.916zm5.876 4.82c-.64.135-.409 1.124.22.946l.936-.232a3.98 3.98 0 01-2.728 1.552c-2.222.244-4.204-1.4-4.441-3.687a.477.477 0 00-.481-.44.482.482 0 00-.457.545c.291 2.808 2.75 4.85 5.48 4.55 1.373-.15 2.555-.871 3.356-1.902l.183.776c.115.68 1.113.434.916-.225L9.51 6.614c-.053-.232-.261-.39-.532-.366l-1.985.488z"
        fill="#000"
      />
    </svg>
  );
};

Update.defaultProps = {
  height: 16,
  width: 16,
};
export default Update;
