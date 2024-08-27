import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import "./menu-sidebar.scss";

const MenuSidebar = (props) => {
    return <nav className="menu-sidebar">{props.children}</nav>;
};

MenuSidebar.propTypes = {
    children: PropTypes.node.isRequired,
};

export const MenuItem = (props) => {
    return (
        <NavLink
            className={({ isActive }) => `menu-sidebar__item ${isActive ? "active" : ""}`}
            to={props.to}
        >
            <span className="menu-sidebar__item__icon">{props.icon}</span>
            <span className="menu-sidebar__item__icon--active">{props.activeIcon}</span>
            <span className="menu-sidebar__item__title">{props.title}</span>
        </NavLink>
    );
};

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node,
};

export default MenuSidebar;
