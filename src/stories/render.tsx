import type { FC } from 'react';
import { useState } from 'react';

import type { IconProps } from '../core';

const renderIconsStory = (icons: Record<string, FC<IconProps>>) => () => {
  const [isFill, setIsFill] = useState(false);

  return (
    <div
      title={isFill ? 'remove fill' : 'add fill'}
      className="page-wrapper"
      onClick={() => {
        const wrapper = document.querySelector(`#wrapper`);

        if (isFill) {
          wrapper?.classList.remove('icon-fill');
          setIsFill(!isFill);
          return;
        }

        wrapper?.classList.add('icon-fill');
        setIsFill(!isFill);
      }}
      role="presentation"
      id="wrapper"
    >
      {Object.entries(icons).map(([name, Icon]) => (
        <div key={name} className="icon-wrapper">
          <Icon size={50} fill={false} />
          <p className="sign">{name.replace('Icon', '')}</p>
        </div>
      ))}
    </div>
  );
};

export default renderIconsStory;
