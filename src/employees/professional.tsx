import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Professional = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);
  return (
    <svg viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.768.559a.5.5 0 01.47 0l7.5 4a.5.5 0 010 .882l-7.5 4a.5.5 0 01-.47 0l-7.5-4a.5.5 0 010-.882l7.5-4zM15.003 7a.5.5 0 01.5.5V14a.5.5 0 11-1 0V7.5a.5.5 0 01.5-.5zM2.75 8.069a.5.5 0 01.497-.005l4.756 2.663 4.756-2.663a.5.5 0 01.744.436V12a.499.499 0 01-.053.224c-.54 1.08-1.975 3.276-5.447 3.276s-4.908-2.197-5.447-3.276A.5.5 0 012.503 12V8.5a.5.5 0 01.247-.431z"
        fill="#000"
      />
      <path d="M16.003 14a1 1 0 11-2 0 1 1 0 012 0z" fill="#000" />
    </svg>
  );
};

Professional.defaultProps = {
  height: 16,
  width: 16,
};
export default Professional;
