import React, { FC } from 'react';

export interface ChatMessage {
    isUser: boolean,
    isLast?: boolean,
    message: string,
}

const ChatBubble: FC<ChatMessage> = ({
    isUser,
    isLast = false,
    message,
}) => {

    return (
        <div className={`
            w-full flex flex-row 
            ${isUser ? "justify-end" : "justify-start"}`
        }>
            <div className={`
                bg-fuchsia-300 
                px-2 py-1 max-w-[90%] min-w-[20%]
                rounded-md
                ${isUser ? "pr-3 rounded-l-xl" : "pl-3 rounded-r-xl"}
                ${isUser && isLast ? "rounded-br-2xl" : ""}
                ${!isUser && isLast ? "rounded-bl-2xl" : ""}
                ${isLast ? "mb-2" : "mb-1"}
            `}>
                <p className="inline text-black">{message}</p>
            </div>
        </div>

    )
}

export default ChatBubble;