import Dexie, { Table } from 'dexie';

export interface Profile {
    id: string,
    profileImageUrl: string,
    tokenBalance: number,
}

export interface Thread {
    id: number,
    contactId: string,
    contactName: string,
    profileImageUrl: string,
    lastMessage: string,
}

export interface Message {
    id?: number,
    contactId: string,
    senderId: string,
    time: Date,
    message: string,
}

class DB extends Dexie {
    profile!: Table<Profile>
    threads!: Table<Thread>
    messages!: Table<Message>

    constructor() {
        super("app");
        this.version(1).stores({
            profile: "++id",
            threads: "++id, contactId, contactName",
            messages: "++id, contactId, time, message",
        })
    }

}

const db = new DB();
export default db;

const profiles = [
    { id: "0", profileImageUrl: "https://placekitten.com/300/300", tokenBalance: 420.69 }
]

const threads = [
    { id: 1, contactId: "1", contactName: "Lauren Ipsum", profileImageUrl: "https://placekitten.com/300/300", lastMessage: "Ok" },
    { id: 2, contactId: "1", contactName: "Lauren Ipsum", profileImageUrl: "https://placekitten.com/300/300", lastMessage: "Ok" },
    { id: 3, contactId: "1", contactName: "Lauren Ipsum", profileImageUrl: "https://placekitten.com/300/300", lastMessage: "Ok" },
    { id: 4, contactId: "1", contactName: "Lauren Ipsum", profileImageUrl: "https://placekitten.com/300/300", lastMessage: "Ok" },
    { id: 5, contactId: "1", contactName: "Lauren Ipsum", profileImageUrl: "https://placekitten.com/300/300", lastMessage: "Ok" },
    { id: 6, contactId: "1", contactName: "Lauren Ipsum", profileImageUrl: "https://placekitten.com/300/300", lastMessage: "Ok" },
    { id: 7, contactId: "1", contactName: "Lauren Ipsum", profileImageUrl: "https://placekitten.com/300/300", lastMessage: "Ok" },
    { id: 8, contactId: "1", contactName: "Lauren Ipsum", profileImageUrl: "https://placekitten.com/300/300", lastMessage: "Ok" },
    { id: 9, contactId: "1", contactName: "Lauren Ipsum", profileImageUrl: "https://placekitten.com/300/300", lastMessage: "Ok" },
    { id: 10, contactId: "1", contactName: "Lauren Ipsum", profileImageUrl: "https://placekitten.com/300/300", lastMessage: "Ok" },
    { id: 11, contactId: "1", contactName: "Lauren Ipsum", profileImageUrl: "https://placekitten.com/300/300", lastMessage: "Ok" },
    { id: 12, contactId: "1", contactName: "Lauren Ipsum", profileImageUrl: "https://placekitten.com/300/300", lastMessage: "Ok" },
]

const messages = [
    { id: 1, contactId: "1", senderId: "0", time: new Date(1), message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
    { id: 2, contactId: "1", senderId: "1", time: new Date(2), message: "sed do eiusmod tempor incididunt ut labore et dolore" },
    { id: 3, contactId: "1", senderId: "0", time: new Date(3), message: "Ut enim ad minim veniam, quis nostrud" },
    { id: 4, contactId: "1", senderId: "1", time: new Date(4), message: "exercitation ullamco laboris nisi ut aliquip ex ea" },
    { id: 5, contactId: "1", senderId: "1", time: new Date(5), message: "commodo consequat. Duis aute irure dolor" },
    { id: 6, contactId: "1", senderId: "1", time: new Date(6), message: "in reprehenderit in voluptate velit esse cillum" },
    { id: 7, contactId: "1", senderId: "0", time: new Date(7), message: "dolore eu fugiat nulla pariatur. Excepteur" },
    { id: 8, contactId: "1", senderId: "1", time: new Date(8), message: "sint occaecat cupidatat non proident, sunt in" },
    { id: 9, contactId: "1", senderId: "0", time: new Date(9), message: "culpa qui officia deserunt mollit anim id est laborum" },
    { id: 10, contactId: "1", senderId: "0", time: new Date(10), message: "Ok" },
]

profiles.forEach((p) => {
    db.profile.put(p);
})

threads.forEach((t) => {
    db.threads.put(t, t.id);
})

messages.forEach((m) => {
    db.messages.put(m, m.id);
})
