import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

// config
import { configPath } from "../config/configPath";

// pages
import Home from "../pages/home/Home";
import Coin from "../pages/coin/Coin";
import Live from "../pages/live/Live";
import Upload from "../pages/upload/Upload";
import Search from "../pages/search/Search";
import Setting from "../pages/setting/Setting";
import Profile from "../pages/profile/Profile";
import Feedback from "../pages/feedback/Feedback";
import Following from "../pages/following/Following";

// Layout
import HeaderOnly from "../layout/header-only/HeaderOnly";
import DefaultLayout from "../layout/default-layout/DefaultLayout";

export const publicRoutes = [
    { path: configPath.home, component: Home },
    { path: configPath.live, component: Live },
    { path: configPath.search, component: Search },
    { path: configPath.setting, component: Setting },
    { path: configPath.profile, component: Profile },
    { path: configPath.following, component: Following },
    { path: configPath.coin, component: Coin, layout: HeaderOnly },
    { path: configPath.upload, component: Upload, layout: HeaderOnly },
    { path: configPath.feedback, component: Feedback, layout: HeaderOnly },
];

const Router = () => {
    return (
        <Routes>
            {publicRoutes.map((route, index) => {
                const Page = route.component;

                let Layout = DefaultLayout;
                
                if (route.layout) {
                    Layout = route.layout;
                } else if (route.layout === null) {
                    Layout = Fragment;
                }

                return (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <Layout>
                                <Page />
                            </Layout>
                        }
                    />
                );
            })}
        </Routes>
    );
};

export default Router;
