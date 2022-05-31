import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const AddAdvert = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 18 14" fill="none" {...props}>
      <path
        clipRule="evenodd"
        d="M1.003.5a.5.5 0 0 1 .5-.5h15.979a.5.5 0 0 1 0 1H1.502a.5.5 0 0 1-.5-.5Zm0 5a.5.5 0 0 1 .5-.5h8.987a.5.5 0 0 1 0 1H1.502a.5.5 0 0 1-.5-.5ZM14.484 7a.5.5 0 0 1 .5.5v2.513l2.498.01a.5.5 0 0 1-.004 1l-2.495-.01V13.5a.5.5 0 1 1-.998 0v-2.49L11.486 11a.5.5 0 0 1 .004-1l2.495.01V7.5a.5.5 0 0 1 .499-.5ZM.981 10.5a.5.5 0 0 1 .5-.5h5.99a.5.5 0 0 1 0 1h-5.99a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
};

AddAdvert.defaultProps = {
  height: 16,
  width: 16,
};
export default AddAdvert;
