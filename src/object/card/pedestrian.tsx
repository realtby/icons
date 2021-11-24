import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Pedestrian = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.007 1a1.5 1.5 0 10-.001 3 1.5 1.5 0 000-3zM3.505 2.5a2.5 2.5 0 114.433 1.59l3.322 2.324a1.75 1.75 0 01-2.005 2.87L8.008 8.44v.528l2.283 2.259a2.5 2.5 0 01.278.328l.128.179c.203.286.322.636.322 1.012v1.5a1.75 1.75 0 01-3.502 0v-.852l-1.04-1.065-2.548 3.034a1.752 1.752 0 01-2.683-2.25l2.76-3.296v-1.4l-1.244.863A1.75 1.75 0 11.753 6.414L4.077 4.09a2.49 2.49 0 01-.57-1.589zm1.387 2.239L1.328 7.233a.75.75 0 10.86 1.23l.002-.002 2.03-1.41a.5.5 0 01.786.41V10a.5.5 0 01-.116.32l-2.876 3.436a.75.75 0 101.149.965l2.902-3.457a.5.5 0 01.741-.028l1.57 1.605a.5.5 0 01.142.35v1.056a.75.75 0 001.5 0v-1.5a.744.744 0 00-.137-.433l-.127-.179a1.507 1.507 0 00-.167-.197L7.156 9.533a.5.5 0 01-.149-.355V7.5a.5.5 0 01.78-.414l2.038 1.376a.75.75 0 00.861-1.229L7.121 4.74A2.494 2.494 0 016.007 5c-.4 0-.78-.094-1.115-.261z"
        fill="#5B6473"
      />
    </svg>
  );
};

Pedestrian.defaultProps = {
  height: 16,
  width: 16,
};
export default Pedestrian;
