import React, { FC } from 'react';

import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/solid'


export interface ContactInfo {
    name: string,
    profileImageUrl: string,
}

const Chat: FC<{ contactInfo: ContactInfo }> = ({
    contactInfo,
}) => {

    const navigate = useNavigate();
    const { name, profileImageUrl } = contactInfo;

    return (
        <div
            className="navbar sticky top-0 w-full mb-2 bg-base-300"
            style={{ height: "75px" }}
        >
            <div className="navbar-start">
                <button
                    className="btn btn-square color btn-outline border-transparent bg-transparent"
                    onClick={() => { navigate(-1) }}
                >
                    <ArrowLeftIcon
                        className="h-6 w-6"
                    />
                </button>
            </div>
            <div className="navbar-center">
                <div className="avatar inline-block">
                    <div className="w-12 rounded-full">
                        <img src={profileImageUrl} alt=""></img>
                    </div>
                </div>
                <div className="inline-block ml-2">
                    <p className="text-base font-bold">{name}</p>
                </div>
            </div>
            <div className="navbar-end"></div>
        </div>
    )
}

export default Chat;