import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Complain = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);
  return (
    <svg viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.06 3.06c-.328.101-.694.19-1.057.19-.537 0-1.159-.044-1.74-.134a9.017 9.017 0 01-.51-.093V7.48c.205.057.456.11.739.154.503.077 1.048.116 1.51.116.138 0 .334-.036.616-.123.222-.068.456-.154.723-.252l.218-.08c.682-.248 1.546-.545 2.444-.545.835 0 1.526.14 2.057.272l.193.05v-4.57c-.483-.158-1.15-.252-2.25-.252-.602 0-1.238.203-1.931.455l-.195.071c-.27.1-.553.203-.818.285zM1.752 9.024c.17.036.342.067.51.093.581.09 1.203.134 1.74.134.363 0 .73-.089 1.056-.19.265-.08.547-.184.818-.284l.195-.071c.693-.252 1.329-.455 1.93-.455.666 0 1.225.11 1.694.228l.34.088.024.007c.1.026.199.053.292.076.188.047.424.101.65.101a.75.75 0 00.75-.75V2a.75.75 0 00-.414-.67C10.52.92 9.55.75 8.003.75c-.898 0-1.762.297-2.444.545l-.218.08c-.267.098-.5.184-.723.252-.282.087-.478.123-.615.123-.463 0-1.008-.039-1.511-.116-.52-.08-.927-.191-1.154-.305A.75.75 0 00.253 2v13a.75.75 0 001.5 0V9.023z"
        fill="#000"
      />
    </svg>
  );
};

Complain.defaultProps = {
  height: 16,
  width: 16,
};
export default Complain;
