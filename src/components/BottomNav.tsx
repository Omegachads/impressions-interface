import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChatBubbleLeftRightIcon, EyeIcon, PlusCircleIcon, BellIcon, UserIcon, } from '@heroicons/react/24/solid'


const Chat: FC = () => {

    const navigate = useNavigate();

    return (
        <div
            className="fixed bottom-0 w-full bg-base-300 flex flex-row justify-evenly"
            style={{ height: "60px" }}
        >

            <button
                className="h-full flex flex-col items-center my-2"
                style={{height: "50px", width: "70px"}}
                onClick={() => { navigate(-1) }}
            >
                <ChatBubbleLeftRightIcon style={{height: "35px", width: "35px"}}/>
                <p>Chat</p>
            </button>

            <button
                className="h-full flex flex-col items-center my-2"
                style={{height: "50px", width: "70px"}}
                onClick={() => { navigate(-1) }}
            >
                <EyeIcon style={{height: "35px", width: "35px"}}/>
                <p>Impressions</p>
            </button>

            <button
                className="h-full flex flex-col items-center my-2"
                style={{height: "50px", width: "70px"}}
                onClick={() => { navigate(-1) }}
            >
                <PlusCircleIcon style={{height: "35px", width: "35px"}}/>
                <p>Send</p>
            </button>

            <button
                className="h-full flex flex-col items-center my-2"
                style={{height: "50px", width: "70px"}}
                onClick={() => { navigate(-1) }}
            >
                <BellIcon style={{height: "35px", width: "35px"}}/>
                <p>Notifications</p>
            </button>

            <button
                className="h-full flex flex-col items-center my-2"
                style={{height: "50px", width: "70px"}}
                onClick={() => { navigate(-1) }}
            >
                <UserIcon style={{height: "35px", width: "35px"}}/>
                <p>Profile</p>
            </button>

        </div>
    )
}

export default Chat;