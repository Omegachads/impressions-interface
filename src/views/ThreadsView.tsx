import React, { FC } from 'react';

import { Link } from "react-router-dom";
import { useLiveQuery } from 'dexie-react-hooks';

import HomeChatItem from '../components/HomeChatItem';

import db from '../db';


const ThreadsView: FC = () => {
    const threads = useLiveQuery(async () => {
        return await db.threads.toArray();
    });

    return (
        <div>
            {
                threads?.map((t) => {
                    const c = {
                        id: t.id,
                        name: t.contactName,
                        profileImageUrl: t.profileImageUrl,
                        lastMessage: t.lastMessage,
                    }

                    return (
                        <Link key={c.id} to={`/chat/${t.id}/${t.contactId}`}>
                            <HomeChatItem {...c} />
                        </Link>
                    )
                })
            }
        </div>
    )
};

export default ThreadsView;