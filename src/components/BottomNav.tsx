import React, { FC, useState } from 'react';

import { ChatBubbleLeftRightIcon, EyeIcon, PlusCircleIcon, BellIcon, UserIcon } from '@heroicons/react/24/outline';

interface SetView {
    (view: string): void;
}

const BottomNav: FC<{ setView: SetView }> = ({ setView }) => {
    const [focusView, setFocusView] = useState("chat");

    return (
        <div
            className="fixed bottom-0 w-full bg-base-300 flex flex-row justify-evenly"
            style={{ height: "60px" }}
        >

            <button
                className={`
                    h-full flex flex-col items-center my-2
                    ${focusView === "chat" ? "text-purple-800" : ""}
                `}
                style={{ height: "50px", width: "70px" }}
                onClick={() => {
                    setFocusView("chat");
                    setView("chat");
                }}
            >
                <ChatBubbleLeftRightIcon style={{ height: "35px", width: "35px" }} />
                <p>Chat</p>
            </button>

            <button
                className={`
                    h-full flex flex-col items-center my-2
                    ${focusView === "impressions" ? "text-purple-800" : ""}
                `}
                style={{ height: "50px", width: "70px" }}
                onClick={() => {
                    setFocusView("impressions");
                    setView("impressions");
                }}
            >
                <EyeIcon style={{ height: "35px", width: "35px" }} />
                <p>Impressions</p>
            </button>

            <button
                className={`
                    h-full flex flex-col items-center my-2
                    ${focusView === "send" ? "text-purple-800" : ""}
                `}
                style={{ height: "50px", width: "70px" }}
                onClick={() => {
                    setFocusView("send");
                    setView("send");
                }}
            >
                <PlusCircleIcon style={{ height: "35px", width: "35px" }} />
                <p>Send</p>
            </button>

            <button
                className={`
                    h-full flex flex-col items-center my-2
                    ${focusView === "notifications" ? "text-purple-800" : ""}
                `}
                style={{ height: "50px", width: "70px" }}
                onClick={() => {
                    setFocusView("notifications");
                    setView("notifications");
                }}
            >
                <BellIcon style={{ height: "35px", width: "35px" }} />
                <p>Notifications</p>
            </button>

            <button
                className={`
                    h-full flex flex-col items-center my-2
                    ${focusView === "profile" ? "text-purple-800" : ""}
                `}
                style={{ height: "50px", width: "70px" }}
                onClick={() => {
                    setFocusView("profile");
                    setView("profile");
                }}
            >
                <UserIcon style={{ height: "35px", width: "35px" }} />
                <p>Profile</p>
            </button>

        </div>
    )
}

export default BottomNav;