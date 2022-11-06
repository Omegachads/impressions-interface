import React, { FC, useEffect, useRef, useContext } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';

import { useParams } from 'react-router-dom';

import ChatBubble from '../components/ChatBubble';
import ChatNav from '../components/ChatNav';
import ChatInput from '../components/ChatInput';

import { ProfileContext } from '../pages/Popup/contexts';
import db from '../db';

const ChatView: FC = () => {
    const profile = useContext(ProfileContext);
    const { threadId, contactId } = useParams();

    const ref = useRef<HTMLDivElement>(null);
    const onSubmit = (m: string) => {
        db.messages.add({ contactId: "1", senderId: "0", time: new Date(), message: m });
        ref.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });

    }

    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
    }, [])

    const contactInfo = useLiveQuery(async () => {
        const thread = await db.threads.filter(t => t.id === Number(threadId)).first();
        return {
            name: thread?.contactName || "",
            profileImageUrl: thread?.profileImageUrl || "",
        }
    })

    const messages = useLiveQuery(async () => {
        return await db.messages.filter(m => m.contactId === contactId).toArray();
    })

    return (
        <div className="relative">
            <ChatNav contactInfo={contactInfo || { name: "", profileImageUrl: "" }} />
            <div className="container overflow-y-scroll px-1" style={{ height: "480px" }}>
                {
                    messages ?
                        messages.map((m, i, arr) => {
                            const isUser = m.senderId === profile.id;
                            const message = m.message;
                            let isLast = true;

                            if (i !== arr.length - 1 && arr[i + 1].senderId === m.senderId) {
                                isLast = false;
                            }

                            return <ChatBubble
                                key={i}
                                isUser={isUser}
                                isLast={isLast}
                                message={message}
                            />
                        })
                        : []
                }
                <div id="chat-end" ref={ref} style={{ height: "60px" }}></div>
            </div>
            <ChatInput submitFn={onSubmit} />
        </div>
    )
}

export default ChatView;