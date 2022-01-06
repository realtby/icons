import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';
import styles from '../../common.module.css';

const MapProgress: React.FC<IconProps> = property => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 28 36" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M28 14.708C28 24.282 14 36 14 36S0 24.282 0 14.708C0 6.585 6.268 0 14 0s14 6.585 14 14.708z" />
      <path
        className={styles['animate-spin']}
        style={{
          transformOrigin: '14px 14px',
        }}
        d="M21 14a7 7 0 10-8.812 6.762"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

MapProgress.defaultProps = {
  height: 16,
  width: 16,
};

export default MapProgress;
