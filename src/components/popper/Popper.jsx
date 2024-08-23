import React from "react";
import PropTypes from "prop-types";

import "./popper.scss";

const Popper = (props) => {
    return (
        <div className="popper">
            {props.children}
        </div>
    )        
};

Popper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Popper;
