import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";

import { SearchIcon, EllipsisVerticalIcon } from "../icons/Icon";
import { configPath } from "../../config/configPath";

import Button from "../button/Button";
import Helmet from "../helmet/Helmet";

import logo from "../../assets/images/image.png";

import "./header.scss";

const Header = () => {
    return (
        <Helmet title="TikTok - Make Your Day">
            <header className="header">
                <nav className="header__container">
                    <Link to={configPath.home} className="header__left">
                        <img src={logo} alt="" className="header__left__image" />
                    </Link>
                    <div className="header__center">
                        <input type="text" className="header__center__input" />
                        <button className="header__center__btn--clear">
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon
                            icon={faSpinner}
                            className="header__center__btn--loading"
                        />

                        <button className="header__center__btn--search">
                            <SearchIcon />
                        </button>
                    </div>
                    <div className="header__right">
                        <Button text>Upload</Button>
                        <Button primary>Login</Button>
                        <EllipsisVerticalIcon className="header__right__icon" />
                    </div>
                </nav>
            </header>
        </Helmet>
    );
};

export default Header;
