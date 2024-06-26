import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const TeaserEdit = (property: IconProps): ReturnType<React.FC> => {
  const { style, ...props } = castIconProps(property);

  return (
    <svg fill="none" {...props}>
      <path
        d="M1.5 1.5a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-13Z"
        stroke="currentColor"
      />
      <path d="M6 2.5h4m-5.5 2h7" stroke="currentColor" strokeLinecap="round" />
      <path
        d="M5.5 9.5v.5h.175l.137-.11L5.5 9.5Zm0 2 .312-.39-.137-.11H5.5v.5Zm2.5 2-.312.39a.5.5 0 0 0 .812-.39H8Zm0-6h.5a.5.5 0 0 0-.812-.39L8 7.5ZM5.5 9H4v1h1.5V9ZM4 9c-.163 0-.397.045-.605.194A.962.962 0 0 0 3 10h1c0-.015.002-.023.002-.024l-.003.006a.075.075 0 0 1-.02.024c-.001.001-.001 0 0 0A.064.064 0 0 1 4 10c.003 0 .004 0 0 0V9Zm-1 1V11h1V10H3Zm0 1c0 .163.045.397.194.605A.962.962 0 0 0 4 12v-1c-.015 0-.023-.002-.024-.002l.006.003a.075.075 0 0 1 .024.02c.001.001 0 .001 0 0A.066.066 0 0 1 4 11c0-.003 0-.004 0 0H3Zm1 1H5.5v-1H4v1Zm1.188-.11 2.5 2 .624-.78-2.5-2-.624.78ZM8.5 13.5v-6h-1v6h1Zm-.812-6.39-2.5 2 .624.78 2.5-2-.624-.78Z"
        fill="currentColor"
      />
      <mask id="602-a" fill="#fff">
        <path d="M10.022 13.368c.057.318.365.534.669.423a3.5 3.5 0 0 0 .029-6.571c-.303-.113-.612.1-.673.418-.043.222.105.433.317.512a2.504 2.504 0 0 1-.02 4.709c-.213.076-.363.286-.322.509Z" />
      </mask>
      <path
        d="m10.344 12.859-.337-.942.337.942Zm.347.932-.34-.94.34.94Zm.34.94a4.5 4.5 0 0 0 1.918-1.34l-1.533-1.285a2.5 2.5 0 0 1-1.065.745l.68 1.88Zm1.918-1.34A4.5 4.5 0 0 0 14 10.521l-2-.01a2.5 2.5 0 0 1-.584 1.595l1.533 1.285ZM14 10.521a4.5 4.5 0 0 0-1.026-2.88L11.43 8.91a2.5 2.5 0 0 1 .57 1.6l2 .01Zm-1.026-2.88a4.5 4.5 0 0 0-1.905-1.358l-.698 1.874a2.5 2.5 0 0 1 1.059.754l1.544-1.27Zm-2.955 1.447c.25.092.472.249.643.456l1.544-1.271A3.505 3.505 0 0 0 10.71 7.21l-.69 1.877Zm.643.456c.223.271.344.612.343.963l2 .009a3.505 3.505 0 0 0-.8-2.243l-1.543 1.27Zm.343.963c-.002.351-.126.69-.352.96l1.533 1.285a3.505 3.505 0 0 0 .819-2.236l-2-.009Zm-.352.96c-.172.206-.396.36-.646.45l.674 1.883a3.505 3.505 0 0 0 1.505-1.048l-1.533-1.285Zm-.646.45c-.578.207-1.114.831-.97 1.63l1.968-.358a.578.578 0 0 1-.081.418.486.486 0 0 1-.243.193l-.674-1.883Zm1.062-5.634c-.992-.37-1.85.361-2.004 1.167l1.964.375a.436.436 0 0 1-.196.284.526.526 0 0 1-.462.048l.698-1.874ZM9.065 7.45c-.153.797.379 1.426.954 1.638l.69-1.877c.094.034.18.1.242.196.066.101.11.25.078.418L9.065 7.45Zm1.286 5.401a.527.527 0 0 1 .46.052c.11.073.175.178.194.286l-1.967.358c.147.807.998 1.545 1.993 1.185l-.68-1.88Z"
        fill="currentColor"
        mask="url(#602-a)"
      />
      <path
        d="M9.5 11.415c0 .323.272.595.57.472a1.5 1.5 0 0 0 0-2.774c-.298-.123-.57.15-.57.472V9.6c0 .219.202.39.357.544a.505.505 0 0 1 0 .714c-.155.155-.357.325-.357.544v.014Z"
        fill="currentColor"
      />
    </svg>
  );
};

TeaserEdit.defaultProps = {
  height: 16,
  width: 16,
};
export default TeaserEdit;