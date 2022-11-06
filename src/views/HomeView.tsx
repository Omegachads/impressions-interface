import React, { FC, useContext, useState } from 'react';

import HomeNav from '../components/HomeNav';
import BottomNav from '../components/BottomNav';

import { ProfileContext } from '../pages/Popup/contexts';
import ThreadsView from './ThreadsView';
import ImpressionsView from './ImpressionsView';
import SendView from './SendView';
import NotificationsView from './NotificationsView';
import ProfileView from './ProfileView';


const HomeView: FC = () => {
    const profile = useContext(ProfileContext);
    const [currentView, setCurrentView] = useState("chat");

    const renderSwitch = (view: string) => {
        switch (view) {
            case "chat":
                return <ThreadsView />
            case "impressions":
                return <ImpressionsView />
            case "send":
                return <SendView />
            case "notifications":
                return <NotificationsView />
            case "profile":
                return <ProfileView />
        }

        return <ThreadsView />
    }

    return (
        <div className="relative h-full">
            <HomeNav tokenBalance={profile.tokenBalance} />
            <div className="container overflow-y-scroll px-1" style={{ height: "460px" }}>
                {renderSwitch(currentView)}
            </div>
            <BottomNav setView={setCurrentView} />
        </div>
    )
}

export default HomeView;