import React, { FC, useState } from 'react';

interface SubmitFn {
    (s: string): void;
}

const ChatInput: FC<{ submitFn: SubmitFn }> = ({ submitFn }) => {
    const [message, setMessage] = useState("");

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        if (message === "") {
            return;
        }

        submitFn(message);
        setMessage("");
    }

    return (
        <div className="fixed bottom-0 py-1 w-full bg-base-200" style={{ height: "60px" }}>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-row">
                    <div className="mx-1 flex-grow">
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input w-full max-w-xs"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <div className="mx-1">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ChatInput