import React, { useState } from "react";
import PropTypes from "prop-types";
import Tippy from "@tippyjs/react/headless";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { KeyboardIcon, LanguageIcon, QuestionMarkIcon } from "../icons/Icon";

import Button from "../button/Button";
import Popper from "./../popper/Popper";

import "./menu.scss";

const MENU_ITEMS = [
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
        to: "/feedback",
    },
    {
        icon: <KeyboardIcon />,
        title: "Keyboard shortcuts",
    },
];

const defaultFn = () => {};

const Menu = (props) => {
    const [history, setHistory] = useState([{ data: MENU_ITEMS }]);
    const current = history[history.length - 1];
    const onChange = props.onChange || defaultFn;

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className="menu" tabIndex="-1" {...attrs}>
                    <Popper className="menu__popper">
                        {history.length > 1 && (
                            <HeaderMenu
                                title={current.title}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
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
        >
            {props.children}
        </Tippy>
    );
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
    return (
        <Button className="menu-item" leftIcon={item.icon} to={item.to} onClick={onClick}>
            {item.title}
        </Button>
    );
};

HeaderMenu.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};

MenuItem.propTypes = {
    item: PropTypes.shape({
        icon: PropTypes.element,
        title: PropTypes.string.isRequired,
        to: PropTypes.string,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Menu;
