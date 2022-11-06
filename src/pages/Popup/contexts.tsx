import { createContext } from 'react';

interface Profile {
    id: string,
    profileImageUrl: string,
    tokenBalance: number,
}

export const defaultProfileContext = {
    id: "0xB0853B57326e08aA536663D6aC78304c0b3E38Da",
    profileImageUrl: "",
    tokenBalance: 21,
};

export const ProfileContext = createContext<Profile>(defaultProfileContext);
