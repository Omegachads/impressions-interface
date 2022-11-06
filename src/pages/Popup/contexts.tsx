import { createContext } from 'react';

interface Profile {
    id: string,
    profileImageUrl: string,
    tokenBalance: number,
}

export const defaultProfileContext = {
    id: "0",
    profileImageUrl: "",
    tokenBalance: 21,
};

export const ProfileContext = createContext<Profile>(defaultProfileContext);
