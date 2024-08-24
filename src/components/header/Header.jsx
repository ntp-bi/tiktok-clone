import React from "react";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";

import {
    SearchIcon,
    EllipsisVerticalIcon,
    UserIcon,
    TikTokCoinIcon,
    GearIcon,
    LogOutIcon,
    MessageIcon,
    InboxIcon,
} from "../icons/Icon";
import { configPath } from "../../config/configPath";

import Menu from "../menu/Menu";
import Image from "../image/Image";
import Button from "../button/Button";
import Helmet from "../helmet/Helmet";
import Popper from "../popper/Popper";
import AccountItem from "../account-item/AccountItem";

import { MENU_ITEMS } from "../menu/Menu";

import { images } from "../../assets/images/images";

import "./header.scss";

const userMenu = [
    {
        icon: <UserIcon />,
        title: "View profile",
        to: configPath.profile,
    },
    {
        icon: <TikTokCoinIcon />,
        title: "Get coins",
        to: configPath.coin,
    },
    {
        icon: <GearIcon />,
        title: "Settings",
        to: configPath.setting,
    },
    ...MENU_ITEMS,
    {
        icon: <LogOutIcon />,
        title: "Log out",
        to: "/logout",
        separate: true,
    },
];

const Header = () => {
    const currentUser = true;

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case "language":
                // Handle change language
                break;
            default:
        }
    };

    return (
        <Helmet title="TikTok - Make Your Day">
            <header className="header">
                <nav className="header__container">
                    <Link to={configPath.home} className="header__left">
                        <img src={images.logo} alt="" className="header__left__image" />
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
                        {currentUser ? (
                            <>
                                <Tippy
                                    delay={[0, 200]}
                                    content="Messages"
                                    placement="bottom"
                                    offset={[0, 0]}
                                >
                                    <button className="header__right__action--btn">
                                        <MessageIcon />
                                    </button>
                                </Tippy>
                                <Tippy
                                    delay={[0, 200]}
                                    content="Inbox"
                                    placement="bottom"
                                    offset={[0, 0]}
                                >
                                    <button className="header__right__action--btn">
                                        <InboxIcon className="btn__inbox" />
                                        <span className="badge">5</span>
                                    </button>
                                </Tippy>
                            </>
                        ) : (
                            <>
                                <Button text>Upload</Button>
                                <Button primary>Login</Button>
                            </>
                        )}

                        <Menu
                            items={currentUser ? userMenu : MENU_ITEMS}
                            onChange={handleMenuChange}
                        >
                            {currentUser ? (
                                <Image
                                    className="header__right__user"
                                    src={images.avatar}
                                    alt=""
                                />
                            ) : (
                                <button className="header__right__more--btn">
                                    <EllipsisVerticalIcon />
                                </button>
                            )}
                        </Menu>
                    </div>
                </nav>
            </header>
        </Helmet>
    );
};

export default Header;
