import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Comment = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.979 1.015a22.835 22.835 0 00-1.957.011c-1.492.075-2.63.303-3.487.659-.81.336-1.37.784-1.753 1.328-.386.547-.617 1.223-.717 2.048-.077.633-.098 1.265.008 1.85.297 1.639 1.553 2.418 2.864 2.792.651.185 1.288.26 1.765.289a8.374 8.374 0 00.72.011l.038-.002h.01l.468-.029.239 1.912c.24-.058.508-.124.697-.172 1.06-.27 2.61-.695 3.949-1.18 1.189-.476 1.969-1.05 2.457-1.743.487-.69.72-1.549.72-2.666 0-1.116-.139-2.017-.478-2.732-.331-.699-.868-1.252-1.736-1.654-.879-.407-2.105-.661-3.807-.722zM6.866 12.986l.135-.032a121.916 121.916 0 001.12-.273c1.071-.273 2.664-.71 4.05-1.21l.007-.004.008-.003c1.307-.522 2.275-1.197 2.91-2.098.639-.904.904-1.983.904-3.243 0-1.184-.145-2.254-.575-3.16-.437-.923-1.153-1.64-2.22-2.134-1.046-.484-2.42-.75-4.19-.814a23.832 23.832 0 00-2.042.013c-1.56.077-2.82.318-3.82.733-.96.397-1.68.955-2.188 1.675C.459 3.153.187 4 .073 4.94c-.083.683-.115 1.426.016 2.15.396 2.184 2.099 3.155 3.574 3.576a9.336 9.336 0 002.397.34l.132 1.057.047.375.016.126.07.552.541-.129zM3 4.498a.5.5 0 01.5-.5h8.977a.5.5 0 010 1H3.5a.5.5 0 01-.5-.5zM3 6.5a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5z"
        fill="#1D2126"
      />
    </svg>
  );
};

Comment.defaultProps = {
  height: 16,
  width: 16,
};
export default Comment;
