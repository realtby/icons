import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const OffersOffice = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 40 40" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.503 11a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-10Zm-1.5.5a1.5 1.5 0 0 1 1.5-1.5h10a1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5h-3.5v2h23.5a1.5 1.5 0 0 1 1.5 1.5v15a.5.5 0 1 1-1 0v-15a.5.5 0 0 0-.5-.5h-24l-11.001.03a.5.5 0 0 0-.5.5V38.5a.5.5 0 0 1-1 0V23.53a1.5 1.5 0 0 1 1.497-1.5l8.592-.023a1.497 1.497 0 0 1-.088-.507V20h-3.5a1.5 1.5 0 0 1-1.5-1.5v-7Zm6 8.5v1.5a.5.5 0 0 0 .5.5h.5v-2h-1Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.002 29c-.173 0-.63.156-.861.713a.122.122 0 0 0-.011.075.175.175 0 0 0 .045.08c.064.07.185.132.326.132h8a.45.45 0 0 0 .327-.133.175.175 0 0 0 .045-.08.122.122 0 0 0-.01-.074c-.232-.557-.689-.713-.861-.713h-7Zm-1.785.33C14.607 28.39 15.435 28 16 28h7c.567 0 1.396.39 1.785 1.33.19.458.058.904-.216 1.207-.262.29-.658.463-1.069.463h-3.5v5.11l3.622.905a.5.5 0 1 1-.243.97l-3.878-.97-3.88.97a.5.5 0 1 1-.242-.97l3.621-.906V31h-3.5a1.45 1.45 0 0 1-1.069-.462 1.126 1.126 0 0 1-.215-1.207ZM29.003 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5 4a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.003 3a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h1.5v-2a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  );
};

OffersOffice.defaultProps = {
  height: 16,
  width: 16,
};
export default OffersOffice;
