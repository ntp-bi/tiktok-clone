import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import { configPath } from "../../config/configPath";
import avatar from "../../assets/images/avt.jpg";

import "./account-item.scss";

const AccountItem = (props) => {
    return (
        <Link to={configPath.profile} className="account-item">
            <img src={avatar} alt="" className="account-item__image" />
            <div className="account-item__info">
                <h4 className="account-item__info__name">
                    <span>Nguyễn Tâm Phước</span>
                    <FontAwesomeIcon
                        className="account-item__info__icon"
                        icon={faCheckCircle}
                    />
                </h4>
                <div className="account-item__info__username">i@mBi</div>
            </div>
        </Link>
    );
};

AccountItem.propTypes = {
    // data: PropTypes.object.isRequired,
};

export default AccountItem;
