import type { Meta } from '@storybook/react';

import * as icons from './icons';
import * as actions from './icons/actions';
import * as admin from './icons/admin';
import * as employees from './icons/employees';
import * as equipment from './icons/equipment';
import * as header from './icons/header';
import * as map from './icons/map';
import * as messages from './icons/messages';
import * as misc from './icons/misc';
import * as objects from './icons/object';
import * as sidebar from './icons/sidebar';
import * as socials from './icons/socials';
import * as status from './icons/status';

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
