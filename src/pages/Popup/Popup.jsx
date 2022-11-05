import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import HomeView from '../../views/HomeView';
import ChatView from '../../views/ChatView';

import './Popup.css';

const home = {
  tokenBalance: 420.69,
  chatItems: [
    {
      id: "0",
      name: "Lauren Ipsum",
      profileImageUrl: "https://placekitten.com/300/300",
      lastMessage: "Ok",
    },
    {
      id: "1",
      name: "Dolores Sitamet",
      profileImageUrl: "https://placekitten.com/300/300",
      lastMessage: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    }
  ]
}

const chat = {
  contactInfo: {
    id: "0",
    name: "Lauren Ipsum",
    profileImageUrl: "https://placekitten.com/300/300"
  },
  messages: [
    { isUser: true, isLast: true, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
    { isUser: false, isLast: true, message: "sed do eiusmod tempor incididunt ut labore et dolore" },
    { isUser: true, message: "Ut enim ad minim veniam, quis nostrud" },
    { isUser: true, isLast: true, message: "exercitation ullamco laboris nisi ut aliquip ex ea" },
    { isUser: false, message: "commodo consequat. Duis aute irure dolor" },
    { isUser: false, message: "in reprehenderit in voluptate velit esse cillum" },
    { isUser: false, isLast: true, message: "dolore eu fugiat nulla pariatur. Excepteur" },
    { isUser: true, message: "sint occaecat cupidatat non proident, sunt in" },
    { isUser: true, isLast: true, message: "culpa qui officia deserunt mollit anim id est laborum" },
    { isUser: false, isLast: true, message: "Ok" },
  ]
};

const Popup = () => {
  return (
    <div style={{ width: "357px", height: "600px" }}>
      <Routes>
        <Route path="/chat/:id" element={<ChatView {...chat} />} />
        <Route path="/" element={<HomeView {...home} />} />
      </Routes>
    </div>
  );
};

export default Popup;
