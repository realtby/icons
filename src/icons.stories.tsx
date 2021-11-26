import type { Meta } from '@storybook/react';

import * as icons from './icons';
import * as actions from './actions';
import * as admin from './admin';
import * as employees from './employees';
import * as equipment from './equipment';
import * as header from './header';
import * as map from './map';
import * as messages from './messages';
import * as misc from './misc';
import * as objects from './object';
import * as sidebar from './sidebar';
import * as socials from './socials';
import * as status from './status';

import './stories/index.css';
import renderIconsStory from './stories/render';

export const AllIcons = renderIconsStory(icons);
export const Actions = renderIconsStory(actions);
export const Admin = renderIconsStory(admin);
export const Employees = renderIconsStory(employees);
export const Equipment = renderIconsStory(equipment);
export const Header = renderIconsStory(header);
export const Map = renderIconsStory(map);
export const Messages = renderIconsStory(messages);
export const Misc = renderIconsStory(misc);
export const Objects = renderIconsStory(objects);
export const Sidebar = renderIconsStory(sidebar);
export const Socials = renderIconsStory(socials);
export const Status = renderIconsStory(status);

const meta: Meta = {
  title: 'All Icons',
  component: AllIcons,
};

export default meta;
