import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import Image from "../image/Image";

import "./account-item.scss";

const AccountItem = (props) => {
    const data = props.data;
    return (
        <Link to={`/@:${data?.nickname}`} className="account-item">
            <Image src={data?.avatar} alt="" className="account-item__image" />
            <div className="account-item__info">
                <h4 className="account-item__info__name">
                    <span>{data?.full_name || data?.first_name + data?.last_name}</span>
                    {data?.tick && (
                        <FontAwesomeIcon
                            className="account-item__info__icon"
                            icon={faCheckCircle}
                        />
                    )}
                </h4>
                <div className="account-item__info__username">{data?.nickname}</div>
            </div>
        </Link>
    );
};

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
