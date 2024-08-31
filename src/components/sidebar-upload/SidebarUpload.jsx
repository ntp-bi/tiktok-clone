import React from "react";

import { configPath } from "../../config/configPath";

import Button from "../button/Button";
import MenuSidebarUpload, {
    MenuSidebarUploadItem,
} from "../MenuSidebarUpload/MenuSidebarUpload";

import {
    AnalyticsIcon,
    CommentSidebarIcon,
    CreatorIcon,
    FeedbackIcon,
    HomeIcon,
    InspirationsIcon,
    PostIcon,
} from "../icons/Icon";

import "./sidebar-upload.scss";
import { Link } from "react-router-dom";

const SidebarUpload = () => {
    return (
        <div className="sidebar-upload">
            <div className="sidebar-upload__wrapper">
                <div className="sidebar-upload__wrapper__btn--upload">
                    <Button primary>Upload</Button>
                </div>
                <hr />
                <div className="sidebar-upload__wrapper__content">
                    <MenuSidebarUpload>
                        <MenuSidebarUploadItem
                            title="Home"
                            to={configPath.home}
                            icon={<HomeIcon width="2.4rem" height="2.4rem" />}
                            activeIcon={
                                <HomeIcon width="2.4rem" height="2.4rem" />
                            }
                        />
                        <MenuSidebarUploadItem
                            title="Post"
                            to="/post"
                            icon={<PostIcon />}
                            activeIcon={<PostIcon />}
                        />
                        <MenuSidebarUploadItem
                            title="Comments"
                            to="/comment"
                            icon={<CommentSidebarIcon />}
                            activeIcon={<CommentSidebarIcon />}
                        />
                        <MenuSidebarUploadItem
                            title="Analytics"
                            to="/analytic"
                            icon={<AnalyticsIcon />}
                            activeIcon={<AnalyticsIcon />}
                        />
                        <MenuSidebarUploadItem
                            title="Inspirations"
                            to="/inspiration"
                            icon={<InspirationsIcon />}
                            activeIcon={<InspirationsIcon />}
                        />
                        <MenuSidebarUploadItem
                            title="Feedback"
                            to="/feedback"
                            icon={<FeedbackIcon />}
                            activeIcon={<FeedbackIcon />}
                        />
                        <MenuSidebarUploadItem
                            title="Creator Academy"
                            to="/creator"
                            icon={<CreatorIcon />}
                            activeIcon={<CreatorIcon />}
                        />
                    </MenuSidebarUpload>
                </div>
                <div className="sidebar-upload__wrapper__footer">
                    <p>
                        <Link className="back" to={configPath.home}>Back to TikTok</Link>
                    </p>
                    <hr />
                    <p>
                        <Link to="/">Terms of Service</Link>
                    </p>
                    <p>
                        <Link to="/">Privacy Policy</Link>
                    </p>
                    <p>
                        <Link to="/">Copyright © 2024 TikTok </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SidebarUpload;
