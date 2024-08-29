import React, { useState, useEffect } from "react";
import Tippy from "@tippyjs/react/headless";

import Popper from "../popper/Popper";

import {
    ForwardStepIcon,
    PCIcon,
    SmartPhoneIcon,
    XMarkIcon,
} from "../icons/Icon";

import "./get-app.scss";

const getAppMenu = [
    {
        icon: <PCIcon />,
        title: "Get TikTok for desktop",
    },
    {
        icon: <SmartPhoneIcon />,
        title: "Get TikTok App",
        separate: true,
    },
];

const GetApp = () => {
    const [visible, setVisible] = useState(false);
    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scroll = () => {
        if (window.scrollY > 100) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", scroll);

        return () => {
            window.removeEventListener("scroll", scroll);
        };
    }, []);

    return (
        <>
            <div className={`get-app ${showButton ? "active" : ""}`}>
                <Tippy
                    interactive
                    placement="top-end"
                    zIndex="999"
                    visible={visible}
                    onClickOutside={() => setVisible(false)}
                    render={(attrs) => (
                        <div tabIndex="-1" {...attrs}>
                            <Popper>
                                <div className="get-app__wrapper">
                                    {getAppMenu.map((item, index) => (
                                        <div
                                            className={`get-app__wrapper__item ${
                                                item.separate ? "separate" : ""
                                            }`}
                                            key={index}
                                        >
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </div>
                                    ))}
                                    <div
                                        className="get-app__wrapper__btn--close"
                                        onClick={() => setVisible(false)}
                                    >
                                        <XMarkIcon />
                                    </div>
                                </div>
                            </Popper>
                        </div>
                    )}
                >
                    <button
                        className="get-app__btn"
                        onClick={() => setVisible(!visible)}
                    >
                        Get app
                    </button>
                </Tippy>
            </div>

            {showButton && (
                <button className="goToTop" onClick={scrollToTop}>
                    <ForwardStepIcon />
                </button>
            )}
        </>
    );
};

export default GetApp;
