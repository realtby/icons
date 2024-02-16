import * as React from 'react';
import type { IconProps } from '../../../core';
import { castIconProps } from '../../../core';

const AutoRenew = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);

  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.85 1.522a.5.5 0 0 1 .624.33v.002l.562 1.804a.5.5 0 0 1-.096.472l-.006.007a.498.498 0 0 1-.315.172l-1.486.422a.5.5 0 1 1-.273-.962l.53-.15a4.99 4.99 0 0 0-6.27 7.52c.204.253.482.485.721.66a5.458 5.458 0 0 0 .378.252l.021.012.005.003a.5.5 0 0 1-.491.871l.243-.437-.243.437h-.002l-.003-.002-.009-.006-.03-.017a6.293 6.293 0 0 1-.458-.3 4.801 4.801 0 0 1-.917-.838 6 6 0 0 1 7.33-9.15l-.146-.475v-.002a.5.5 0 0 1 .33-.625ZM13.342 9.389h.005a.5.5 0 0 0 .575-.412 6.004 6.004 0 0 0 .076-1.173.5.5 0 0 0-.515-.484h-.01a.5.5 0 0 0-.483.517 4.974 4.974 0 0 1-.064.976.5.5 0 0 0 .412.575h.004Zm-.406 1.09a.5.5 0 0 1 .161.69 6.005 6.005 0 0 1-.716.933.5.5 0 0 1-.707.023l-.003-.003-.003-.004a.5.5 0 0 1-.024-.706 4.972 4.972 0 0 0 .596-.777.5.5 0 0 1 .689-.16l.003.002.004.003Zm-.425-5.66.003-.001a.5.5 0 0 1 .684.182c.098.17.188.346.269.524a.5.5 0 0 1-.25.662l-.003.002-.005.001a.5.5 0 0 1-.661-.249 4.995 4.995 0 0 0-.224-.435.5.5 0 0 1 .183-.683l.001-.001.003-.002Zm-1.784 7.984a.5.5 0 0 1-.249.662 6.023 6.023 0 0 1-1.114.378.5.5 0 0 1-.6-.373l-.001-.005-.001-.004a.5.5 0 0 1 .373-.6 4.989 4.989 0 0 0 .927-.315.5.5 0 0 1 .661.25l.002.003.002.005Zm-3.128.705a.5.5 0 0 1-.575.412 5.966 5.966 0 0 1-.575-.124.5.5 0 0 1-.354-.613v-.001l.001-.003.001-.003v-.002a.5.5 0 0 1 .613-.353c.158.042.318.077.479.103a.5.5 0 0 1 .412.575l-.001.005v.004Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.996 4.5a.5.5 0 0 1 .5.5v2.793l2.354 2.353a.5.5 0 0 1-.707.708l-2.5-2.5A.5.5 0 0 1 7.496 8V5a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  );
};

AutoRenew.defaultProps = {
  height: 14,
  width: 14,
};
export default AutoRenew;
