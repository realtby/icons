import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const HideCompetitorsBrand = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M23.997 5h-8.5l-3 13.5h-3.5V24h12l3-19Z" fill="#FFD02F" />
      <path d="M4.997 18h8V4h7v15a4 4 0 0 1-4 4h-11v-5Z" fill="#FFD02F" />
      <path
        d="M10.5 3.5h-.75v.75h.75V3.5Zm-3 0v.75h.75V3.5H7.5Zm-2 0v-.75a.75.75 0 0 0-.75.75h.75Zm0 3h-.75c0 .414.336.75.75.75V6.5Zm7 0v.75a.75.75 0 0 0 .75-.75h-.75Zm0-3h.75a.75.75 0 0 0-.75-.75v.75Zm3.25 9.5a.75.75 0 0 0 1.5 0h-1.5ZM9.5 21.25a.75.75 0 0 0 0-1.5v1.5Zm-5-11.5a.75.75 0 0 0 0 1.5v-1.5Zm9 1.5a.75.75 0 0 0 0-1.5v1.5Zm-9 1.5a.75.75 0 0 0 0 1.5v-1.5Zm7 1.5a.75.75 0 0 0 0-1.5v1.5Zm-7 1.5a.75.75 0 0 0 0 1.5v-1.5Zm5 1.5a.75.75 0 0 0 0-1.5v1.5ZM11.25 3.5c0-.417-.09-1.05-.39-1.606C10.542 1.304 9.947.75 9 .75v1.5c.253 0 .408.112.54.356.15.277.21.645.21.894h1.5ZM9 .75c-.947 0-1.542.554-1.86 1.144-.3.556-.39 1.189-.39 1.606h1.5c0-.25.06-.617.21-.894.132-.244.287-.356.54-.356V.75Zm-1.5 2h-2v1.5h2v-1.5Zm-2 4.5h7v-1.5h-7v1.5Zm7-4.5h-2v1.5h2v-1.5Zm.75 3.75v-2h-1.5v2h1.5Zm0-2v-1h-1.5v1h1.5Zm-.75.75h3v-1.5h-3v1.5Zm3 0a.364.364 0 0 1 .187.059.1.1 0 0 1 .037.041.325.325 0 0 1 .026.15h1.5c0-.644-.285-1.12-.687-1.409A1.866 1.866 0 0 0 15.5 3.75v1.5Zm.25.25V13h1.5V5.5h-1.5Zm-11-2v1h1.5v-1h-1.5Zm0 1v2h1.5v-2h-1.5Zm.75-.75h-3v1.5h3v-1.5Zm-3 0c-.287 0-.7.08-1.063.341-.402.29-.687.765-.687 1.409h1.5a.33.33 0 0 1 .026-.15.113.113 0 0 1 .037-.041.365.365 0 0 1 .187-.059v-1.5ZM.75 5.5v14h1.5v-14H.75Zm0 14c0 .287.08.7.341 1.063.29.402.765.687 1.409.687v-1.5a.325.325 0 0 1-.15-.026.113.113 0 0 1-.041-.037.364.364 0 0 1-.059-.187H.75Zm1.75 1.75h7v-1.5h-7v1.5Zm2-10h9v-1.5h-9v1.5Zm0 3h7v-1.5h-7v1.5Zm0 3h5v-1.5h-5v1.5Z"
        fill="#1D2126"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.274 15.73c-.916-.564-2.024-.98-3.274-.98-1.592 0-2.953.675-3.982 1.469-1.026.792-1.776 1.741-2.164 2.4a.75.75 0 0 0-.027.712c.255.52.66 1.1 1.19 1.653l1.296-.825a6.022 6.022 0 0 1-.938-1.13 7.775 7.775 0 0 1 1.56-1.623c.861-.664 1.907-1.156 3.065-1.156.646 0 1.257.153 1.821.404l1.453-.925Zm1.645 1.323-1.299.827c.422.397.762.805 1.005 1.149a6.277 6.277 0 0 1-1.548 1.643C19.23 21.3 18.178 21.75 17 21.75a4.815 4.815 0 0 1-1.862-.382l-1.469.935c.936.556 2.063.947 3.331.947 1.572 0 2.927-.6 3.97-1.372 1.035-.767 1.803-1.733 2.203-2.547a.75.75 0 0 0-.027-.712 8.485 8.485 0 0 0-1.227-1.566Zm-5.845 3.72a2 2 0 0 0 2.925-1.861l-2.925 1.861Zm1.85-3.548a2 2 0 0 0-2.921 1.86l2.92-1.86Z"
        fill="#1D2126"
      />
      <path
        d="m11.497 22.5 11-7"
        stroke="#1D2126"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

HideCompetitorsBrand.defaultProps = {
  height: 16,
  width: 16,
};
export default HideCompetitorsBrand;