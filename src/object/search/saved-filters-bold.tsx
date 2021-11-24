import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const SavedFiltersBold = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.963 2.4a13.514 13.514 0 00-.416-.35A12.539 12.539 0 005.69.787C4.958.39 4.109.052 3.259.005 2.387-.042 1.517.22.82 1.003l-.015.018-.014.02C-.182 2.37-.162 3.844.356 5.23.867 6.6 1.873 7.926 2.95 9.069c1.083 1.148 2.27 2.144 3.181 2.85a31.36 31.36 0 001.535 1.116l.024.016c.037.024.009.01.068.04a.497.497 0 00.633-.178.5.5 0 00-.144-.693m0 0h-.001l-.106-.071a30.283 30.283 0 01-1.396-1.02c-.888-.688-2.031-1.649-3.066-2.747-1.041-1.103-1.942-2.314-2.385-3.5-.433-1.158-.416-2.25.29-3.231.462-.51 1.014-.68 1.622-.646.637.035 1.335.297 2.006.662.665.361 1.267.804 1.706 1.16a12.776 12.776 0 01.652.567l.034.033.008.008.002.001.35.343.35-.343.003-.002.012-.012a5.886 5.886 0 01.248-.228 13.3 13.3 0 01.728-.6c.712-.545 1.68-1.171 2.64-1.45.943-.273 1.78-.19 2.415.525.489.55.657 1.125.583 1.757-.077.658-.421 1.416-1.045 2.283a.5.5 0 00.812.584c.67-.932 1.122-1.853 1.226-2.752.108-.924-.157-1.781-.829-2.537-.987-1.11-2.288-1.154-3.441-.82C10.527.513 9.44 1.23 8.695 1.8a14.398 14.398 0 00-.732.6m2.517 5.956c-.27.21-.477.58-.477 1.294 0 .715.209 1.118.49 1.355.3.252.77.395 1.435.395.51 0 .939-.082 1.264-.241a1.33 1.33 0 00.584-.525c.135-.23.227-.547.227-.984 0-.698-.23-1.068-.535-1.287-.337-.242-.856-.363-1.54-.363-.682 0-1.153.124-1.448.356zm-.617-.788C10.42 7.133 11.161 7 11.928 7c.767 0 1.535.13 2.123.55.619.443.952 1.148.952 2.1 0 .578-.122 1.078-.365 1.491-.118.2-.26.373-.421.52l1.621 1.468a.5.5 0 01-.67.742l-1.857-1.68c-.428.148-.901.209-1.383.209-.784 0-1.526-.165-2.078-.63-.569-.479-.847-1.2-.847-2.12 0-.92.28-1.626.86-2.082z"
        fill="#1D2126"
      />
    </svg>
  );
};

SavedFiltersBold.defaultProps = {
  height: 16,
  width: 16,
};
export default SavedFiltersBold;
