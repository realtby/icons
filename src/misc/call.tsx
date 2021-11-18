import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Call = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);
  return (
    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9.126 7.938c-.392-.387-.881-.387-1.271 0-.297.295-.594.59-.887.89-.08.082-.147.1-.244.044-.192-.105-.397-.19-.582-.304-.862-.542-1.583-1.239-2.222-2.023-.318-.39-.6-.807-.797-1.276-.04-.095-.032-.157.045-.235.297-.287.587-.582.879-.876.407-.41.407-.89-.003-1.301-.232-.235-.464-.465-.696-.7-.24-.24-.477-.481-.72-.719-.391-.382-.88-.382-1.27.003-.3.294-.587.597-.892.886a1.447 1.447 0 00-.454.977c-.048.621.105 1.208.32 1.78C.77 6.268 1.44 7.32 2.251 8.283a11.883 11.883 0 003.935 3.079c.69.334 1.403.591 2.18.634.534.03.999-.105 1.37-.522.255-.285.543-.544.812-.816.4-.405.402-.894.005-1.294-.474-.477-.951-.951-1.428-1.426zM8.538 5.495c.08.245.318.418.572.374.254-.043.428-.286.356-.534A4.127 4.127 0 008.42 3.568a4.096 4.096 0 00-1.889-1.08c-.25-.065-.488.117-.523.372-.036.256.144.49.392.562.511.149.975.423 1.36.808.359.359.623.79.778 1.265zM10.09 1.943A6.79 6.79 0 006.655.08a.444.444 0 00-.525.383.498.498 0 00.395.546 5.89 5.89 0 012.906 1.595 5.889 5.889 0 011.554 2.728c.063.25.302.421.557.378a.444.444 0 00.366-.537 6.845 6.845 0 00-1.818-3.23z"
        fill="#1D2126"
      />
    </svg>
  );
};

Call.defaultProps = {
  height: 16,
  width: 16,
};
export default Call;
