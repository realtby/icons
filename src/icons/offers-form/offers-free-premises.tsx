import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const OffersFreePremises = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 40 40" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.688 2.103a.5.5 0 0 0-.36.004L2.587 8.729l8.066 5.262h17.715l8.978-5.271-17.657-6.617Zm18.315 7.39-9 5.285V33.19l9 4.5V9.493ZM36.385 38l-8-4H10.632l-7.2 4h32.953Zm-34.382-.35V9.543l8 5.22v18.443l-8 4.444Zm9-4.65h5V22.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5V33h5V14.991h-17V33Zm11 0V22.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5V33h5ZM18.96 1.177a1.5 1.5 0 0 1 1.078-.01l18.64 6.985a.5.5 0 0 1 .324.468V38.5a.5.5 0 0 1-.5.5h-37a.5.5 0 0 1-.5-.5V8.62a.5.5 0 0 1 .316-.465l17.642-6.978ZM20.503 26.5a.5.5 0 0 1 .5.5v1a.5.5 0 1 1-1 0v-1a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  );
};

OffersFreePremises.defaultProps = {
  height: 16,
  width: 16,
};
export default OffersFreePremises;
