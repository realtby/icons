import cn from 'classnames';

import type { IconProps } from '../../core';
import { castIconProps } from '../../core';
import styles from '../../common.module.css';

const Loader: React.FC<IconProps> = property => {
  const { className, ...props } = castIconProps(property);

  return (
    <svg
      className={cn(styles['animate-spin'], className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle
        className={styles['opacity-25']}
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className={styles['opacity-75']}
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};

Loader.defaultProps = {
  height: 16,
  width: 16,
};
export default Loader;
