import cn from 'classnames';
import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';
import styles from '../common.module.css';

const rotations = {
  left: styles['rotate-left'],
  right: styles['rotate-right'],
  up: styles['rotate-up'],
  down: styles['rotate-down'],
};

interface Props extends IconProps {
  rotate?: keyof typeof rotations;
}

const Arrow: React.FC<Props> = ({ rotate, ...property }): ReturnType<React.FC> => {
  const { className, ...props } = castIconProps(property);

  return (
    <svg
      className={cn(className, rotate ? rotations[rotate] : rotations.down)}
      viewBox="0 0 13 6"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.222.375A1 1 0 011.628.22l4.375 3.5 4.375-3.5a1 1 0 111.25 1.562l-5 4a1 1 0 01-1.25 0l-5-4A1 1 0 01.222.375z"
      />
    </svg>
  );
};

Arrow.defaultProps = {
  height: 16,
  width: 16,
};
export default Arrow;
