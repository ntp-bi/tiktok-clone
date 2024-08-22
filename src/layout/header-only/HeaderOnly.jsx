import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/header/Header";

const HeaderOnly = (props) => {
    return (
        <div className="wrapper">
            <Header />
            <div className="container">
                <div className="content">{props.children}</div>
            </div>
        </div>
    );
};

HeaderOnly.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderOnly;
