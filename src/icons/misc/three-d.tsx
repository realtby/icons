import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const ThreeD = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 56 56" fill="none" {...props}>
      <path
        clipRule="evenodd"
        d="M2.003 28.001c0-14.359 11.64-25.999 25.999-25.999 14.358 0 25.998 11.64 25.998 26C54 42.36 42.36 54 28.002 54c-14.359 0-26-11.64-26-25.999ZM28.002.002c-15.464 0-28 12.536-28 28C.003 43.463 12.539 56 28.003 56 43.465 56 56 43.464 56 28S43.465.002 28.002.002Zm-4.104 25.223c.301-.607.452-1.323.452-2.149 0-1.331-.444-2.427-1.33-3.287-.888-.86-2.219-1.289-3.993-1.289-1.156 0-2.19.19-3.1.569-.911.38-1.684.83-2.317 1.353l.998 1.44c.443-.311.887-.585 1.33-.821a6.675 6.675 0 0 1 1.426-.556 6.56 6.56 0 0 1 1.687-.203c1.006 0 1.802.258 2.388.772.586.505.88 1.226.88 2.161 0 .733-.175 1.37-.524 1.91-.34.53-.84.943-1.497 1.238-.657.295-1.457.442-2.4.442h-1.746v1.796h1.735c1.03 0 1.909.117 2.637.353.737.228 1.3.59 1.687 1.088.396.488.594 1.133.594 1.934 0 1.163-.352 2.081-1.057 2.755-.705.666-1.85 1-3.434 1-.791 0-1.611-.106-2.459-.317a10.88 10.88 0 0 1-2.352-.897v1.972c.713.362 1.457.62 2.233.77.784.16 1.636.241 2.555.241 1.512 0 2.752-.232 3.718-.695.974-.472 1.695-1.121 2.163-1.947.475-.826.712-1.774.712-2.844 0-1.23-.348-2.225-1.045-2.984-.69-.758-1.723-1.23-3.1-1.416v-.1c.728-.152 1.361-.418 1.9-.797a3.995 3.995 0 0 0 1.26-1.492Zm17.536 7.825c.713-1.399 1.069-3.139 1.069-5.22 0-1.981-.349-3.641-1.045-4.981-.69-1.349-1.672-2.364-2.947-3.047-1.275-.691-2.796-1.037-4.562-1.037h-5.24v18.482h4.717c1.925 0 3.56-.35 4.907-1.05 1.354-.707 2.388-1.756 3.1-3.147Zm-1.842-9.253c.523 1.078.784 2.448.784 4.108 0 2.486-.602 4.357-1.805 5.613-1.196 1.256-2.99 1.883-5.382 1.883h-2.46V20.598h2.911c1.45 0 2.673.266 3.671.797 1.006.522 1.766 1.323 2.281 2.402Z"
      />
    </svg>
  );
};

ThreeD.defaultProps = {
  height: 16,
  width: 16,
};
export default ThreeD;