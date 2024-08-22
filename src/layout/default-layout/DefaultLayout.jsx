import React from "react";
import PropTypes from "prop-types";

import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

import "./default-layout.scss";

const DefaultLayout = (props) => {
    return (
        <div className="wrapper">
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{props.children}</div>
            </div>
        </div>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
