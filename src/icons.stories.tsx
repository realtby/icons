import type { Meta } from '@storybook/react';

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

export const All = () => (
  <>
    <Actions />
    <Admin />
    <Employees />
    <Equipment />
    <Header />
    <Map />
    <Messages />
    <Misc />
    <Objects />
    <Sidebar />
    <Socials />
    <Status />
  </>
);
export const Actions = renderIconsStory(actions, 'actions');
export const Admin = renderIconsStory(admin, 'admin');
export const Employees = renderIconsStory(employees, 'employees');
export const Equipment = renderIconsStory(equipment, 'equipment');
export const Header = renderIconsStory(header, 'header');
export const Map = renderIconsStory(map, 'map');
export const Messages = renderIconsStory(messages, 'messages');
export const Misc = renderIconsStory(misc, 'misc');
export const Objects = renderIconsStory(objects, 'objects');
export const Sidebar = renderIconsStory(sidebar, 'sidebar');
export const Socials = renderIconsStory(socials, 'socials');
export const Status = renderIconsStory(status, 'status');

const meta: Meta = {
  title: 'Icons',
  component: All,
};

export default meta;
