import type { FC } from 'react';
import { useState } from 'react';

import type { IconProps } from '../core';

const renderIconsStory = (icons: Record<string, FC<IconProps>>, title?: string) => () => {
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
            <Icon size={48} />
            <p className="sign">{name.replace('Icon', '')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default renderIconsStory;
