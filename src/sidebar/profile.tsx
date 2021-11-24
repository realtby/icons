import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const Profile = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3.443 16.967l.388.315.003-.004-.391-.311zm15.12 0l.398-.304-.008-.01-.39.314zm.343.45l.32.384-.32-.385zM13.653 7.36c0 1.102-1.1 2.139-2.65 2.139v1c1.93 0 3.65-1.326 3.65-3.139h-1zM11.003 9.5c-1.55 0-2.65-1.037-2.65-2.139h-1c0 1.813 1.72 3.139 3.65 3.139v-1zm-2.65-2.139c0-1.102 1.1-2.139 2.65-2.139v-1c-1.93 0-3.65 1.326-3.65 3.14h1zm2.65-2.139c1.55 0 2.65 1.037 2.65 2.14h1c0-1.814-1.72-3.14-3.65-3.14v1zm-7.17 12.056c.653-.818 1.338-1.62 2.398-2.23C7.287 14.44 8.757 14 11 14v-1c-2.378 0-4.028.468-5.267 1.181-1.233.71-2.016 1.642-2.68 2.474l.782.623zM11 14c2.242 0 3.709.438 4.764 1.044 1.06.61 1.747 1.412 2.41 2.236l.78-.627c-.673-.835-1.458-1.766-2.691-2.475C15.024 13.466 13.376 13 10.999 13v1zm-9.996-3.497c0-3.53.647-5.854 2.16-7.318C4.684 1.716 7.19 1 11.21 1V0C7.122 0 4.276.718 2.47 2.466.654 4.22.002 6.896.002 10.503h1zM11.209 1c4.022 0 6.416.718 7.828 2.175 1.415 1.46 1.966 3.784 1.966 7.328h1c0-3.588-.543-6.265-2.248-8.024C18.047.718 15.295 0 11.21 0v1zM11 19c-3.416 0-5.915-.66-7.55-2.029l-.642.767C4.705 19.328 7.487 20 10.999 20v-1zm-7.55-2.029c-1.585-1.328-2.446-3.401-2.446-6.468h-1c0 3.256.921 5.657 2.804 7.235l.642-.767zm-.394-.32l-.315.388.776.63.315-.387-.776-.63zm17.948-6.148c0 3.157-.847 5.225-2.416 6.529l.639.769c1.877-1.56 2.777-3.965 2.777-7.298h-1zm-2.416 6.529C16.963 18.38 14.463 19 10.999 19v1c3.545 0 6.333-.626 8.227-2.2l-.64-.768zm-.421.238l.343.45.795-.607-.344-.45-.794.607z"
        fill="#000"
      />
    </svg>
  );
};

Profile.defaultProps = {
  height: 16,
  width: 16,
};
export default Profile;
