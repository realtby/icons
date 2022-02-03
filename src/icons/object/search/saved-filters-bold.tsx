import * as React from 'react';
import type { IconProps } from '../../../core';
import { castIconProps } from '../../../core';

const SavedFiltersBold = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 14" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.96 2.4a13.51 13.51 0 0 0-.41-.35A12.54 12.54 0 0 0 5.69.79 5.96 5.96 0 0 0 3.26 0 2.93 2.93 0 0 0 .82 1l-.02.02v.02c-.98 1.33-.96 2.8-.44 4.19.5 1.37 1.51 2.7 2.59 3.84a28.24 28.24 0 0 0 3.18 2.85 31.36 31.36 0 0 0 1.54 1.12l.02.01.07.04a.5.5 0 0 0 .63-.18.5.5 0 0 0-.14-.69m0 0-.11-.07a30.28 30.28 0 0 1-1.4-1.02 27.16 27.16 0 0 1-3.06-2.75 11.13 11.13 0 0 1-2.39-3.5c-.43-1.16-.41-2.25.3-3.23A1.92 1.92 0 0 1 3.2 1c.63.04 1.33.3 2 .67.67.36 1.27.8 1.7 1.16a12.78 12.78 0 0 1 .66.56l.03.04h.01l.35.35.35-.34.02-.02a5.89 5.89 0 0 1 .25-.23 13.3 13.3 0 0 1 .72-.6 8.64 8.64 0 0 1 2.64-1.45c.95-.27 1.78-.19 2.42.53.49.55.66 1.12.58 1.76A5.12 5.12 0 0 1 13.9 5.7a.5.5 0 0 0 .8.58 6.08 6.08 0 0 0 1.23-2.75 3.15 3.15 0 0 0-.82-2.54c-1-1.1-2.3-1.15-3.45-.82A9.59 9.59 0 0 0 8.7 1.8a14.4 14.4 0 0 0-.74.6m2.52 5.96c-.27.2-.48.58-.48 1.29 0 .72.21 1.12.5 1.36.3.25.76.39 1.43.39.5 0 .94-.08 1.26-.24a1.33 1.33 0 0 0 .59-.53c.13-.23.22-.54.22-.98 0-.7-.23-1.07-.53-1.29A2.66 2.66 0 0 0 11.93 8c-.68 0-1.15.12-1.45.36zm-.62-.8A3.3 3.3 0 0 1 11.93 7c.77 0 1.53.13 2.12.55.62.44.95 1.15.95 2.1a2.9 2.9 0 0 1-.36 1.5c-.12.2-.26.36-.42.51l1.62 1.47a.5.5 0 0 1-.67.74L13.3 12.2a4.25 4.25 0 0 1-1.38.21c-.79 0-1.53-.17-2.08-.63-.57-.48-.85-1.2-.85-2.12 0-.92.28-1.63.86-2.08z"
      />
    </svg>
  );
};

SavedFiltersBold.defaultProps = {
  height: 16,
  width: 16,
};
export default SavedFiltersBold;