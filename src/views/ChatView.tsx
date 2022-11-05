import React, { FC } from 'react';

import { useParams } from 'react-router-dom';

import ChatBubble, { ChatMessage } from '../components/ChatBubble';
import ChatNav, { ContactInfo } from '../components/ChatNav';

interface ChatInfo {
    contactInfo: ContactInfo,
    messages: ChatMessage[],
}

const ChatView: FC<ChatInfo> = ({
    contactInfo,
    messages,
}) => {
    const { id } = useParams();

    return (
        <div className="relative">
            <ChatNav contactInfo={contactInfo} />
            <div className="container px-1">
                {messages.map((m, i) => <ChatBubble key={i} {...m} />)}
            </div>
        </div>
    )
}

export default ChatView;