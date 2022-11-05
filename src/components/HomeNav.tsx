import React, { FC } from 'react';

const Chat: FC<{ tokenBalance: number }> = ({
    tokenBalance,
}) => {

    return (
        <div
            className="navbar sticky top-0 w-full bg-base-300"
            style={{ height: "75px" }}
        >
            <div className="navbar-start h-full">
                <h1 
                    className="font-extrabold text-3xl"
                    style={{
                        background: "linear-gradient(94.84deg, #7F28ED 6.88%, #AF3AE1 49.98%, #EB0707 95.07%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}>
                    PreshMail
                </h1>
            </div>
            <div className="navbar-end h-full flex flex-row items-center">
                <p className="mx-1 font-semibold text-2xl">{tokenBalance}</p>
                <p className="mx-1 text-lg">IMP</p>
            </div>
        </div>
    )
}

export default Chat;