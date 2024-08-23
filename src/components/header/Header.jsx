import React from "react";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";

import { SearchIcon, EllipsisVerticalIcon } from "../icons/Icon";
import { configPath } from "../../config/configPath";

import Menu from "../menu/Menu";
import Button from "../button/Button";
import Helmet from "../helmet/Helmet";
import Popper from "../popper/Popper";
import AccountItem from "../account-item/AccountItem";

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
                    <div>
                        <Tippy
                            interactive
                            render={(attrs) => (
                                <div className="search__result" tabIndex="-1" {...attrs}>
                                    <Popper>
                                        <h4 className="search__result__title">
                                            Accounts
                                        </h4>
                                        <AccountItem />
                                        <AccountItem />
                                        <AccountItem />
                                    </Popper>
                                </div>
                            )}
                        >
                            <div className="header__center">
                                <input
                                    type="text"
                                    className="header__center__input"
                                    placeholder="Search accounts and video"
                                    spellCheck={false}
                                />
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
                        </Tippy>
                    </div>
                    <div className="header__right">
                        <Button text>Upload</Button>
                        <Button primary>Login</Button>
                        <Menu>
                            <button className="header__right__more--btn">
                                <EllipsisVerticalIcon />
                            </button>
                        </Menu>
                    </div>
                </nav>
            </header>
        </Helmet>
    );
};

export default Header;
