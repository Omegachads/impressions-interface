import React, { FC } from 'react';

import { Link } from "react-router-dom";

import HomeNav from '../components/HomeNav';
import HomeChatItem, { HomeChatItemInfo } from '../components/HomeChatItem';


interface HomeInfo {
    tokenBalance: number,
    chatItems: HomeChatItemInfo[],
}

const HomeView: FC<HomeInfo> = ({
    tokenBalance,
    chatItems,
}) => {
    return (
        <div className="relative">
            <HomeNav tokenBalance={tokenBalance} />
            <div className="container px-1">
                {chatItems.map((c) => (
                    <Link key={c.id} to={`/chat/${c.id}`}>
                        <HomeChatItem {...c} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default HomeView;