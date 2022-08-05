import type { FC } from 'react';
import { useState } from 'react';

import cn from 'classnames';

import type { IconProps } from '../core';

const renderIconsStory =
  (icons: Record<string, FC<IconProps>>, title?: string, outline = false) =>
  () => {
    const [isFill, setIsFill] = useState(false);

    return (
      <div>
        {title && <h2 className="">{title.toUpperCase()}</h2>}
        <div
          className="page-wrapper"
          title={isFill ? 'remove fill' : 'add fill'}
          onClick={() => {
            const icon = document.querySelector(`#${title || ''}`);

            if (isFill) {
              icon?.classList.remove('icon-fill');
              setIsFill(!isFill);
              return;
            }

            icon?.classList.add('icon-fill');
            setIsFill(!isFill);
          }}
          role="presentation"
          id={title || ''}
        >
          {Object.entries(icons).map(([name, Icon]) => (
            <div key={name} className="icon-wrapper">
              <Icon {...adjustSize(Icon.defaultProps, 48, outline)} className={cn({ outline })} />
              <p className="sign">{name.replace('Icon', '')}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default renderIconsStory;

const adjustSize = (defaultProps: IconProps | undefined, size = 48, realProportion?: boolean) => {
  const { height, width } = defaultProps || {};

  if (!realProportion || height === width || !(height && width)) {
    return {
      size,
    };
  }

  const times = size / Math.max(height, width);

  return {
    height: height * times,
    width: width * times,
  };
};
