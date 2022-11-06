import React, { FC } from 'react';

export interface ImpressionItemInfo {
    id: string,
    name: string,
    profileImageUrl: string,
    value: number,
    opened: boolean,
}

const ImpressionItem: FC<ImpressionItemInfo> = ({
    name,
    profileImageUrl,
    value,
}) => {

    const shortName = `${name.substring(0, 6)}...${name.substring(38)}`;

    return (
        <div className="flex flex-row pt-1 pb-3 border-b-2">
            <div className="avatar w-1/6">
                <div className="h-12 w-12 rounded-full">
                    <img src={profileImageUrl} alt=""></img>
                </div>
            </div>
            <div className="w-5/6">
                <p className="font-bold text-base">{shortName}</p>
                <p className="w-11/12 text-sm truncate text-clip">+{value.toPrecision(4)} IMP</p>
            </div>
        </div>
    )
}

export default ImpressionItem;