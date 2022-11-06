import React, { FC, useContext } from 'react';

import { Link } from "react-router-dom";
import { useLiveQuery } from 'dexie-react-hooks';

import HomeNav from '../components/HomeNav';
import BottomNav from '../components/BottomNav';
import HomeChatItem from '../components/HomeChatItem';

import { ProfileContext } from '../pages/Popup/contexts';
import db from '../db';


const HomeView: FC = () => {
    const profile = useContext(ProfileContext);

    const threads = useLiveQuery(async () => {
        return await db.threads.toArray();
    })

    return (
        <div className="relative h-full">
            <HomeNav tokenBalance={profile.tokenBalance} />
            <div className="container overflow-y-scroll px-1" style={{ height: "460px" }}>
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
            <BottomNav />
        </div>
    )
}

export default HomeView;