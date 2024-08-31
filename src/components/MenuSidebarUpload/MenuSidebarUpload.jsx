import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import "./menu-sidebar-upload.scss";

const MenuSidebarUpload = (props) => {
    return <nav className="menu-sidebar-upload">{props.children}</nav>;
};

MenuSidebarUpload.prototype = {
    children: PropTypes.node.isRequired,
};

export const MenuSidebarUploadItem = (props) => {
    return (
        <NavLink
            className={({ isActive }) =>
                `menu-sidebar-upload-item ${isActive ? "active" : ""}`
            }
            to={props.to}
        >
            <span className="menu-sidebar-upload-item__icon">{props.icon}</span>
            <span className="menu-sidebar-upload-item__icon--active">
                {props.activeIcon}
            </span>
            <span className="menu-sidebar-upload-item__title">
                {props.title}
            </span>
        </NavLink>
    );
};

MenuSidebarUploadItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node,
};

export default MenuSidebarUpload;
