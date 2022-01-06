import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Profile = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 23 20" {...props}>
      <path d="m3.44 16.97.4.31-.4-.31zm15.12 0 .4-.3v-.02l-.4.32zm.35.45.32.38-.32-.38zM13.65 7.36c0 1.1-1.1 2.14-2.65 2.14v1c1.93 0 3.65-1.33 3.65-3.14h-1zM11 9.5c-1.55 0-2.65-1.04-2.65-2.14h-1c0 1.81 1.72 3.14 3.65 3.14v-1zM8.35 7.36c0-1.1 1.1-2.14 2.65-2.14v-1c-1.93 0-3.65 1.33-3.65 3.14h1zM11 5.22c1.55 0 2.65 1.04 2.65 2.14h1c0-1.81-1.72-3.14-3.65-3.14v1zM3.83 17.28a8.4 8.4 0 0 1 2.4-2.23C7.3 14.44 8.76 14 11 14v-1c-2.38 0-4.03.47-5.27 1.18a9.37 9.37 0 0 0-2.68 2.48l.78.62zM11 14c2.24 0 3.7.44 4.76 1.04a8.51 8.51 0 0 1 2.41 2.24l.78-.63a9.49 9.49 0 0 0-2.69-2.47C15.02 13.47 13.38 13 11 13v1zM1 10.5c0-3.53.65-5.85 2.16-7.31C4.68 1.72 7.2 1 11.21 1V0C7.12 0 4.28.72 2.47 2.47.65 4.22 0 6.9 0 10.5h1zM11.2 1c4.03 0 6.43.72 7.84 2.17C20.45 4.63 21 6.96 21 10.5h1c0-3.58-.54-6.26-2.25-8.02C18.05.72 15.3 0 11.21 0v1zM11 19c-3.42 0-5.92-.66-7.55-2.03l-.64.77C4.7 19.33 7.49 20 11 20v-1zm-7.55-2.03C1.87 15.64 1 13.57 1 10.5H0c0 3.26.93 5.66 2.8 7.24l.65-.77zm-.4-.32-.3.39.77.63.31-.39-.77-.63zM21 10.5c0 3.16-.84 5.23-2.41 6.53l.64.77C21.1 16.24 22 13.84 22 10.5h-1zm-2.41 6.53c-1.63 1.35-4.13 1.97-7.6 1.97v1c3.55 0 6.34-.63 8.24-2.2l-.64-.77zm-.42.24.34.45.8-.6-.35-.46-.8.61z" />
    </svg>
  );
};

Profile.defaultProps = {
  height: 16,
  width: 16,
};
export default Profile;
