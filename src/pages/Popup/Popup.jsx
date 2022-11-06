import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import { ProfileContext, defaultProfileContext } from './contexts';
import HomeView from '../../views/HomeView';
import ChatView from '../../views/ChatView';

import '../../db';

import './Popup.css';

const Popup = () => {
  return (
    <ProfileContext.Provider value={defaultProfileContext}>
      <div style={{ width: "357px", height: "600px" }}>
        <Routes>
          <Route path="/chat/:threadId/:contactId" element={<ChatView />} />
          <Route path="/" element={<HomeView />} />
        </Routes>
      </div>
    </ProfileContext.Provider >
  );
};

export default Popup;
