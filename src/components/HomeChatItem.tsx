import React, { FC } from 'react';

export interface HomeChatItemInfo {
    id: string,
    name: string,
    profileImageUrl: string,
    lastMessage: string,
}

const HomeChatItem: FC<HomeChatItemInfo> = ({
    name,
    profileImageUrl,
    lastMessage,
}) => {

    return (
        <div className="flex flex-row pt-1 pb-3 border-b-2">
            <div className="avatar w-1/6">
                <div className="h-12 w-12 rounded-full">
                    <img src={profileImageUrl} alt=""></img>
                </div>
            </div>
            <div className="w-5/6">
                <p className="font-bold text-base">{name}</p>
                <p className="w-11/12 text-sm truncate text-clip">{lastMessage}</p>
            </div>
        </div>
    )
}

export default HomeChatItem;