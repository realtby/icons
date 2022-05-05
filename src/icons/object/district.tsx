import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const District = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg fill="none" {...props}>
      <g clipPath="url(#bq8-a)" fill="#1D2126">
        <path d="M8 13.5c1.5 0 2.5-1 2.5-4.5l5 3L8 15.5.5 12l5-3c0 3.5 1 4.5 2.5 4.5Z" />
        <path d="m10.5 9 .257-.429A.5.5 0 0 0 10 9h.5Zm-5 0H6a.5.5 0 0 0-.757-.429L5.5 9Zm-5 3-.257-.429a.5.5 0 0 0 .046.882L.5 12ZM8 15.5l-.211.453a.5.5 0 0 0 .422 0L8 15.5Zm7.5-3.5.211.453a.5.5 0 0 0 .046-.882L15.5 12ZM10 9c0 1.723-.25 2.73-.61 3.294-.326.513-.772.706-1.39.706v1c.882 0 1.686-.307 2.234-1.17.516-.81.766-2.053.766-3.83h-1Zm-2 4c-.618 0-1.064-.193-1.39-.706C6.25 11.73 6 10.724 6 9H5c0 1.777.25 3.02.766 3.83C6.314 13.694 7.118 14 8 14v-1ZM5.243 8.571l-5 3 .514.858 5-3-.514-.858ZM.289 12.453l7.5 3.5.422-.906-7.5-3.5-.422.906Zm7.922 3.5 7.5-3.5-.422-.906-7.5 3.5.422.906Zm7.546-4.382-5-3-.514.858 5 3 .514-.858Z" />
        <rect x={7} y={3} rx={1} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6.75 2.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
        />
      </g>
      <defs>
        <clipPath id="bq8-a">
          <path fill="#fff" transform="translate(.003)" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

District.defaultProps = {
  height: 16,
  width: 16,
};
export default District;
