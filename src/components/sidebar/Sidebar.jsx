import React, { useContext } from "react";

import Image from "./../image/Image";
import { configPath } from "../../config/configPath";
import { images } from "./../../assets/images/images";

import Button from "../button/Button";
import { ModalContext } from "../ModalProvider/ModalProvider";
import MenuSidebar, { MenuItem } from "../menu/menu-sidebar/MenuSidebar";
import SuggestedAccounts from "../suggested-accounts/SuggestedAccounts";

import {
    ExploreIcon,
    ExploreActiveIcon,
    FollowingIcon,
    FollowingIconActiveIcon,
    HomeIcon,
    HomeActiveIcon,
    LiveIcon,
    LiveActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    UploadIcon,
} from "../icons/Icon";

import "./sidebar.scss";

const footerData = [
    {
        title: "Công ty",
    },
    {
        title: "Chương trình",
    },
    {
        title: "Điều khoản và chính sách",
    },
];

const Sidebar = () => {
    const currentUser = false;
    const context = useContext(ModalContext);

    return (
        <aside className="sidebar">
            <MenuSidebar>
                <MenuItem
                    title="For You"
                    to={configPath.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Explore"
                    to="/explore"
                    icon={<ExploreIcon />}
                    activeIcon={<ExploreActiveIcon />}
                />
                <div className="sidebar-following">
                    <MenuItem
                        title="Following"
                        to={configPath.following}
                        icon={<FollowingIcon />}
                        activeIcon={<FollowingIconActiveIcon />}
                    />
                </div>
                <MenuItem
                    title="Friends"
                    to="/friends"
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem
                    title="LIVE"
                    to={configPath.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                />
                <MenuItem
                    title="Upload"
                    to={configPath.upload}
                    icon={<UploadIcon />}
                />

                {currentUser ? (
                    <div className="sidebar-profile">
                        <Image
                            src={images.avatar}
                            className="header__right__user"
                        />
                        <MenuItem
                            title="Profile"
                            to={configPath.profile}
                            icon=""
                        />
                    </div>
                ) : (
                    <div className="login">
                        <Button outline onClick={context.handleShowModal}>
                            Log in
                        </Button>
                    </div>
                )}
            </MenuSidebar>

            <SuggestedAccounts title="Suggested accounts" />
            <SuggestedAccounts title="Following accounts" />
            <div className="sidebar__footer">
                {footerData.map((item, index) => (
                    <div className="sidebar__footer__items" key={index}>
                        <span className="sidebar__footer__items__item">
                            {item.title}
                        </span>
                    </div>
                ))}
                <span className="copyright">
                    <span>©</span> 2024 TikTok
                </span>
            </div>
        </aside>
    );
};

export default Sidebar;
