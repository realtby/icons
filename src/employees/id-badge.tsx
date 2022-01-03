import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const IdBadge = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 13 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.003 0a2 2 0 00-2 2v10.5a2 2 0 002 2h1.171a2 2 0 011.415.586l.56.56a1.207 1.207 0 001.707 0l.561-.56a2 2 0 011.414-.586h1.172a2 2 0 002-2V2a2 2 0 00-2-2h-8zm6.004 5.105c0 1.163-.89 2.106-1.987 2.106s-1.987-.943-1.987-2.106C4.033 3.943 4.923 3 6.02 3s1.987.943 1.987 2.105zm-5.493 5.057C2.93 7.825 5.066 7.21 6.02 7.21c2.06 0 3.13 1.657 3.461 2.958.115.45-.24.831-.68.831H3.239c-.439 0-.805-.381-.724-.838z"
      />
    </svg>
  );
};

IdBadge.defaultProps = {
  height: 16,
  width: 16,
};
export default IdBadge;
