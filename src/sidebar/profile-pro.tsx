import * as React from 'react';
import type { IconProps } from '../core';
import { castIconProps } from '../core';

const ProfilePro = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 24 23" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.164 3.185C1.65 4.649 1.003 6.974 1.003 10.503c0 2.815.725 4.793 2.07 6.125.66-.825 1.439-1.744 2.66-2.447C6.97 13.468 8.62 13 10.998 13c1.915 0 3.358.302 4.497.794 1.141.493 1.949 1.165 2.605 1.864h-1.454a6.377 6.377 0 00-1.548-.946C14.111 14.285 12.81 14 11 14c-2.242 0-3.712.44-4.768 1.048-1.057.609-1.742 1.408-2.392 2.224.794.567 1.763.992 2.917 1.279v1.028c-1.567-.359-2.895-.958-3.95-1.841C.925 16.16.004 13.759.004 10.503c0-3.607.652-6.283 2.465-8.037C4.276.718 7.122 0 11.21 0c4.086 0 6.838.718 8.546 2.48 1.705 1.758 2.248 4.435 2.248 8.023 0 2.1-.357 3.835-1.096 5.224h-1.16c.819-1.257 1.256-2.96 1.256-5.224 0-3.544-.55-5.868-1.966-7.328C17.625 1.718 15.231 1 11.21 1c-4.019 0-6.527.716-8.045 2.185zm7.839 2.037c-1.55 0-2.65 1.037-2.65 2.14 0 1.101 1.1 2.138 2.65 2.138 1.55 0 2.65-1.037 2.65-2.139 0-1.102-1.1-2.139-2.65-2.139zm-3.65 2.14c0-1.814 1.72-3.14 3.65-3.14s3.65 1.326 3.65 3.14c0 1.812-1.72 3.138-3.65 3.138s-3.65-1.326-3.65-3.139z"
      />
      <path d="M18.314 20.474c-.22-.274-.329-.683-.329-1.226 0-.542.111-.95.332-1.226.222-.276.55-.415.985-.415.87 0 1.303.547 1.303 1.641 0 1.092-.436 1.638-1.31 1.638-.435 0-.762-.137-.981-.412zM8.848 19.112h.36c.336 0 .588-.062.755-.186.167-.126.251-.309.251-.548 0-.241-.07-.42-.212-.535-.139-.115-.358-.173-.657-.173h-.497v1.442zM13.388 18.983h.353c.346 0 .602-.055.767-.163.164-.109.247-.28.247-.512 0-.23-.085-.394-.255-.492-.167-.097-.427-.146-.78-.146h-.332v1.313z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.503 15.5a2 2 0 00-2 2V21a2 2 0 002 2h12.5a2 2 0 002-2v-3.5a2 2 0 00-2-2h-12.5zm12.614 5.602c.424-.432.636-1.05.636-1.854 0-.806-.21-1.424-.632-1.854-.42-.43-1.025-.644-1.819-.644-.793 0-1.402.214-1.828.641-.424.425-.636 1.042-.636 1.85 0 .81.212 1.43.636 1.861.423.432 1.03.648 1.821.648.791 0 1.399-.216 1.822-.648zm-9.798-2.76c0 .522-.174.922-.522 1.199-.347.277-.84.415-1.48.415h-.47v1.728H7.754v-4.858h1.649c.626 0 1.102.128 1.426.383.328.252.491.63.491 1.132zm2.07 1.478v1.864h-1.095v-4.858h1.504c.701 0 1.22.121 1.557.363.337.239.505.603.505 1.093 0 .285-.084.54-.25.764a1.654 1.654 0 01-.71.521 198.782 198.782 0 001.518 2.117h-1.215l-1.232-1.864h-.583z"
      />
    </svg>
  );
};

ProfilePro.defaultProps = {
  height: 16,
  width: 16,
};
export default ProfilePro;
