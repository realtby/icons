import type { FC } from 'react';

import type { IconProps } from '../core';

const renderIconsStory = (icons: Record<string, FC<IconProps>>) => () =>
  (
    <div className="page-wrapper">
      {Object.entries(icons).map(([name, Icon]) => (
        <div key={name} className="icon-wrapper">
          <Icon size={50} fill={false} />
          <p className="sign">{name.replace('Icon', '')}</p>
        </div>
      ))}
    </div>
  );

export default renderIconsStory;
