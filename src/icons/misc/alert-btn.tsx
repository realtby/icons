import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const AlertBtn = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 24 24" {...props}>
      <g clipPath="url(#cvm-a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.434 3.225a.523.523 0 0 0-.868 0L1.108 19.245c-.215.33.03.762.435.762h20.915c.404 0 .65-.431.434-.762L12.434 3.225Zm-1.736-.53c.604-.926 2-.926 2.604 0l10.458 16.02c.647.991-.09 2.285-1.303 2.285H1.543C.33 21-.407 19.706.24 18.714l10.458-16.02ZM12 6.455c.284 0 .513.223.513.497v7.743c0 .274-.23.497-.513.497a.505.505 0 0 1-.513-.497V6.953c0-.274.23-.497.513-.497Z"
        />
        <path d="M12.516 18.02c0 .274-.23.497-.513.497a.505.505 0 0 1-.513-.497c0-.274.23-.497.513-.497.283 0 .513.223.513.497Z" />
      </g>
      <defs>
        <clipPath id="cvm-a">
          <path fill="#fff" transform="translate(.003)" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

AlertBtn.defaultProps = {
  height: 24,
  width: 24,
};
export default AlertBtn;
