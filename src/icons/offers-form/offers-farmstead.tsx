import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const OffersFarmstead = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 40 40" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.318 6.41a.5.5 0 0 0-.636 0l-7.698 6.341a.501.501 0 0 0-.129.162l-2.8 5.6a.5.5 0 0 0-.052.223V37.5a.5.5 0 0 0 .5.5h6.5v-8.5a1.5 1.5 0 0 1 1.5-1.5h5a1.5 1.5 0 0 1 1.5 1.5V38h6.5a.5.5 0 0 0 .5-.5V18.736a.5.5 0 0 0-.053-.224l-2.8-5.598a.5.5 0 0 0-.129-.163l-7.703-6.342ZM37.503 39a1.5 1.5 0 0 0 1.5-1.5V18.736a1.5 1.5 0 0 0-.159-.67l-2.799-5.6a1.5 1.5 0 0 0-.388-.487l-7.703-6.342a1.5 1.5 0 0 0-1.908 0L18.35 11.98a1.5 1.5 0 0 0-.388.487l-2.8 5.6a1.5 1.5 0 0 0-.158.67V37.5a1.5 1.5 0 0 0 1.5 1.5h21Zm-7.5-1v-8.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V38h6Zm-5.5-21a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5Zm-1.5.5a1.5 1.5 0 0 1 1.5-1.5h5a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-5a1.5 1.5 0 0 1-1.5-1.5v-5ZM1.444 29.461c.26-.292.648-.461 1.058-.461h2.232c1.2 0 2.025.837 2.52 1.702.096.166.182.339.26.514.08-.177.169-.35.267-.518.5-.855 1.324-1.698 2.491-1.698h2.231c.41 0 .8.169 1.059.461.268.302.389.728.249 1.171a5.39 5.39 0 0 1-1.252 2.1c-.588.599-1.37 1.057-2.287 1.057H8.004L8.003 38.5a.5.5 0 0 1-1 0v-4.71h-2.27c-.917 0-1.698-.46-2.287-1.058a5.39 5.39 0 0 1-1.251-2.1c-.14-.443-.019-.87.249-1.17Zm6.611 3.328h2.217c.567 0 1.107-.283 1.574-.758a4.392 4.392 0 0 0 1.011-1.7.196.196 0 0 0-.043-.206.417.417 0 0 0-.31-.125h-2.232c-.633 0-1.194.46-1.628 1.203a5.096 5.096 0 0 0-.589 1.586Zm-1.1 0a5.032 5.032 0 0 0-.568-1.59C5.967 30.465 5.407 30 4.734 30H2.502a.417.417 0 0 0-.31.125.196.196 0 0 0-.044.206 4.391 4.391 0 0 0 1.011 1.7c.468.475 1.008.758 1.575.758h2.22Z"
      />
    </svg>
  );
};

OffersFarmstead.defaultProps = {
  height: 16,
  width: 16,
};
export default OffersFarmstead;
