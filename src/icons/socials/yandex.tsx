import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Yandex = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 25 24" {...props}>
      <path d="m8.47 21.5 3.73-7.1h1.65v7.1h2.34v-19h-4.14c-2.65 0-5.8 2.4-5.8 6.27 0 3.88 3.96 5.46 3.96 5.46L5.5 21.5h2.96zm1.45-9.71c-.59-.6-1.09-1.65-1.09-3.38 0-3.78 2.53-4.25 2.87-4.31h2.07v8.63h-1.56a3.2 3.2 0 0 1-2.3-.92v-.02z" />
    </svg>
  );
};

Yandex.defaultProps = {
  height: 16,
  width: 16,
};
export default Yandex;
