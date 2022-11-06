import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ChatView from '../views/ChatView';

import '../pages/Popup/index.css'

export default {
    component: ChatView,
} as ComponentMeta<typeof ChatView>

const Template: ComponentStory<typeof ChatView> = (args) => <ChatView {...args} />;

export const Primary = Template.bind({});
Primary.args = {};