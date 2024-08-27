import React, { useState } from "react";
import PropTypes from "prop-types";
import Tippy from "@tippyjs/react/headless";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { KeyboardIcon, LanguageIcon, QuestionMarkIcon, ThemeIcon } from "../../icons/Icon";

import Button from "../../button/Button";
import Popper from "../../popper/Popper";
import { configPath } from "../../../config/configPath";

import "./menu.scss";

export const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: "English",
        children: {
            title: "Language",
            data: [
                {
                    type: "language",
                    code: "en",
                    title: "English",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Tiếng Việt",
                },
            ],
        },
    },
    {
        icon: <QuestionMarkIcon />,
        title: "Feedback and help",
        to: configPath.feedback,
    },
    {
        icon: <KeyboardIcon />,
        title: "Keyboard shortcuts",
    },
    {
        icon: <ThemeIcon />,
        title: "Dark mode",
        children: {
            title: "Dark mode",
            data: [
                {
                    type: "light",
                    title: "Light mode",
                },
                {
                    type: "dark",
                    title: "Dark mode",
                },
            ],
        },
    },
];

const defaultFn = () => {};

const Menu = ({ children, items = [], hideOnClick = false, onChange = defaultFn }) => {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const handleReset = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            offset={[12, 8]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={(attrs) => (
                <div className="menu" tabIndex="-1" {...attrs}>
                    <Popper className="menu__popper">
                        {history.length > 1 && (
                            <HeaderMenu title={current.title} onBack={handleBack} />
                        )}
                        {current.data.map((item, index) => {
                            const isParent = !!item.children;

                            return (
                                <MenuItem
                                    key={index}
                                    item={item}
                                    onClick={() => {
                                        if (isParent) {
                                            setHistory((prev) => [
                                                ...prev,
                                                item.children,
                                            ]);
                                        } else {
                                            onChange(item);
                                        }
                                    }}
                                />
                            );
                        })}
                    </Popper>
                </div>
            )}
            onHide={handleReset}
        >
            {children}
        </Tippy>
    );
};

Menu.propTypes = {
    items: PropTypes.array,
    children: PropTypes.node.isRequired,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export const HeaderMenu = ({ title, onBack }) => {
    return (
        <header className="menu__header">
            <button className="menu__header__btn--back" onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className="menu__header__title">{title}</h4>
        </header>
    );
};

export const MenuItem = ({ item, onClick }) => {
    const separate = item.separate ? "separate" : "";

    return (
        <Button
            className={`menu-item ${separate}`}
            leftIcon={item.icon}
            to={item.to}
            onClick={onClick}
        >
            {item.title}
        </Button>
    );
};

HeaderMenu.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};

MenuItem.propTypes = {
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default Menu;
