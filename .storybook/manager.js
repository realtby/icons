import { addons } from '@storybook/addons';

import theme from './theme';

addons.setConfig({
  isFullscreen: true,
  showNav: true,
  showPanel: false,
  enableShortcuts: true,
  isToolshown: true,
  theme,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: false,
    collapsedRoots: ['other'],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
});
