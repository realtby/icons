import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const RecommendOffer = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <g clipPath="url(#esx-a)">
        <path d="m22.264 2.172.5.015a.5.5 0 0 0-.515-.515l.015.5ZM3.879 12.485l-.444-.23a.5.5 0 0 0 .797.584l-.353-.354Zm7.117-5.318.4.3-.4-.3Zm.954 13.39-.354-.354a.5.5 0 0 0 .592.793l-.238-.44Zm5.318-7.117-.3-.4.3.4ZM3.171 21.263l-.474-.158a.5.5 0 0 0 .633.633l-.159-.475Zm6.011-10.252-.474.158v.002l.002.003.003.01a2.753 2.753 0 0 0 .056.15c.039.098.097.236.177.405.159.335.405.793.757 1.286.703.983 1.842 2.129 3.564 2.702l.316-.948c-1.46-.487-2.443-1.463-3.066-2.335a7.48 7.48 0 0 1-.667-1.134 5.752 5.752 0 0 1-.192-.454l-.002-.004-.474.159Zm-.055-.497c-.237.026-.558.027-.996.038-.42.012-.914.034-1.433.109-1.039.15-2.219.517-3.173 1.47l.707.708c.743-.743 1.685-1.055 2.609-1.188.461-.067.909-.088 1.317-.099.391-.01.787-.012 1.08-.044l-.11-.994ZM22.25 1.672c-6.383.193-9.832 2.775-11.653 5.195l.8.6c1.635-2.173 4.8-4.611 10.883-4.795l-.03-1ZM10.596 6.867a11.192 11.192 0 0 0-1.54 2.798 9.14 9.14 0 0 0-.287.903 5.91 5.91 0 0 0-.08.359v.001l.493.083.493.082v.001-.002a1.446 1.446 0 0 1 .013-.062c.01-.047.026-.12.05-.214a8.04 8.04 0 0 1 .254-.801c.252-.675.684-1.591 1.403-2.547l-.799-.601Zm-6.274 5.849c.578-1.111 1.62-2.522 2.849-3.582 1.246-1.077 2.568-1.696 3.732-1.475l.186-.983c-1.628-.308-3.26.568-4.572 1.701-1.33 1.15-2.45 2.662-3.082 3.878l.887.461Zm8.603 2.537c0 1.063.466 3.155-1.329 4.95l.707.707c2.165-2.165 1.622-4.834 1.622-5.657h-1Zm.5 0 .082.493h.004l.006-.001.02-.004.073-.014a9.004 9.004 0 0 0 1.16-.347 11.188 11.188 0 0 0 2.799-1.54l-.602-.8a10.193 10.193 0 0 1-2.546 1.403 8.018 8.018 0 0 1-1.016.305 2.26 2.26 0 0 1-.051.01l-.011.002h-.002.001l.083.493Zm4.144-1.414c2.42-1.82 5-5.27 5.195-11.652l-1-.03c-.184 6.083-2.622 9.247-4.797 10.883l.602.8Zm-5.38 7.157c1.268-.69 2.85-1.877 4.019-3.227.585-.676 1.083-1.41 1.38-2.161.298-.753.405-1.552.156-2.322l-.952.308c.157.484.108 1.036-.134 1.646-.242.611-.665 1.25-1.206 1.874-1.082 1.25-2.566 2.365-3.74 3.003l.476.879Zm-8.543.426c.464-1.393 1.292-3.314 2.258-4.595.489-.648.964-1.066 1.388-1.219a.935.935 0 0 1 .56-.04c.18.046.389.158.623.392l.707-.707c-.332-.332-.694-.556-1.086-.654a1.933 1.933 0 0 0-1.144.069c-.7.253-1.322.861-1.846 1.557-1.061 1.406-1.93 3.445-2.409 4.88l.949.317Zm4.829-5.462c.233.234.346.443.391.623a.934.934 0 0 1-.04.56c-.153.424-.57.899-1.218 1.388-1.28.966-3.202 1.794-4.595 2.258l.317.949c1.435-.479 3.474-1.348 4.88-2.409.696-.525 1.304-1.145 1.557-1.847.13-.362.168-.75.069-1.143-.099-.392-.322-.754-.654-1.086l-.707.707Z" />
        <circle
          cx={16.253}
          cy={8.182}
          r={2}
          transform="rotate(45 16.253 8.182)"
          stroke="currentColor"
          fill="none"
        />
      </g>
      <defs>
        <clipPath id="esx-a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

RecommendOffer.defaultProps = {
  height: 16,
  width: 16,
};
export default RecommendOffer;