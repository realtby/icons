import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const UpdateSmall = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path d="m6.115 6.916-.18-.775a.475.475 0 0 0-.485-.38.484.484 0 0 0-.435.606l.47 2.004c.062.26.316.42.569.359l1.949-.48c.613-.153.39-1.1-.224-.947l-.937.232A3.983 3.983 0 0 1 9.57 5.98c2.222-.244 4.205 1.404 4.442 3.69.051.666 1.03.558.941-.104C14.68 6.934 12.502 4.973 9.728 5c-1.629.166-2.813.885-3.613 1.916Zm5.875 4.82c-.64.135-.409 1.124.22.946l.936-.232a3.98 3.98 0 0 1-2.728 1.552c-2.222.244-4.204-1.4-4.44-3.687a.477.477 0 0 0-.482-.44.482.482 0 0 0-.457.545c.292 2.808 2.75 4.85 5.48 4.55 1.373-.15 2.555-.871 3.356-1.902l.183.776c.115.68 1.113.434.916-.225l-.467-2.005c-.053-.232-.261-.39-.532-.366l-1.985.488Z" />
    </svg>
  );
};

UpdateSmall.defaultProps = {
  height: 20,
  width: 20,
};
export default UpdateSmall;
