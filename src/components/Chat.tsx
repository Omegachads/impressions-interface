import React, { FC } from 'react';

import ChatBubble, { ChatMessage } from './ChatBubble';

interface ChatInfo {
    contact: {
        name: string,
        profileImageUrl: string,
    },
    messages: ChatMessage[],
}

const Chat: FC<{ chatInfo: ChatInfo }> = ({
    chatInfo,
}) => {

    const { messages } = chatInfo;
    const { name, profileImageUrl } = chatInfo.contact;

    return (
        <div className="relative">
            <div className="navbar sticky top-0 w-full mb-2 bg-base-300">
                <div className="navbar-start">
                    <svg className="h-6 w-6 fill-current md:h-8 md:w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path></svg>
                </div>
                <div className="navbar-center">
                    <div className="avatar inline-block">
                        <div className="w-12 rounded-full">
                            <img src={profileImageUrl} alt=""></img>
                        </div>
                    </div>
                    <div className="inline-block ml-2">
                        <p className="font-semibold">{name}</p>
                    </div>
                </div>
                <div className="navbar-end"></div>
            </div>
            <div className="container px-1">
                {messages.map((m) => ChatBubble(m))}
            </div>
        </div>
    )
}

export default Chat;