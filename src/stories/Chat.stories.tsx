import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Chat from '../components/Chat';

import '../pages/Popup/index.css'

export default {
    component: Chat,
} as ComponentMeta<typeof Chat>

const Template: ComponentStory<typeof Chat> = (args) => <Chat {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    chatInfo: {
        contact: {
            name: "Lauren Ipsum",
            profileImageUrl: "https://placekitten.com/300/300"
        },
        messages: [
            { isUser: true, isLast: true, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
            { isUser: false, isLast: true, message: "sed do eiusmod tempor incididunt ut labore et dolore" },
            { isUser: true, message: "Ut enim ad minim veniam, quis nostrud" },
            { isUser: true, isLast: true, message: "exercitation ullamco laboris nisi ut aliquip ex ea" },
            { isUser: false, message: "commodo consequat. Duis aute irure dolor" },
            { isUser: false, message: "in reprehenderit in voluptate velit esse cillum" },
            { isUser: false, isLast: true, message: "dolore eu fugiat nulla pariatur. Excepteur" },
            { isUser: true, message: "sint occaecat cupidatat non proident, sunt in" },
            { isUser: true, isLast: true, message: "culpa qui officia deserunt mollit anim id est laborum" },
            { isUser: false, isLast: true, message: "Ok" },
        ]
    }
}