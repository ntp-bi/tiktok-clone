import React, { useState } from "react";
import PropTypes from "prop-types";
import Tippy from "@tippyjs/react/headless";

import {
    ChevronDownIcon,
    EmailIcon,
    EmbedIcon,
    LinkRoundedIcon,
    PaperPlaneIcon,
} from "../icons/Icon";
import Popper from "../popper/Popper";
import { images } from "../../assets/images/images";

import "./share-action.scss";

const SHARE_MENU = [
    {
        icon: <EmbedIcon />,
        title: "Embed",
    },
    {
        icon: <PaperPlaneIcon />,
        title: "Send to friends",
    },
    {
        icon: <img src={images.facebook} alt="" />,
        title: "Share to Facebook",
    },
    {
        icon: <img src={images.whatsapp} alt="" />,
        title: "Share to WhatsApp",
    },
    {
        icon: <LinkRoundedIcon />,
        title: "Copy link",
    },
];

const EXPANDED_SHARE_MENU = [
    ...SHARE_MENU,
    {
        icon: <img src={images.twitter} alt="" />,
        title: "Share to Twitter",
    },
    {
        icon: <img src={images.linkedin} alt="" />,
        title: "Share to LinkedIn",
    },
    {
        icon: <img src={images.telegram} alt="" />,
        title: "Share to Telegram",
    },
    {
        icon: <EmailIcon />,
        title: "Share to Email",
    },
    {
        icon: <img src={images.line} alt="" />,
        title: "Share to LINE",
    },
    {
        icon: <img src={images.whatsapp} alt="" />,
        title: "Share to Pinterest",
    },
];

const ShareAction = (props) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="share-action">
            <Tippy
                interactive
                hideOnClick={true}
                placement="top"
                delay={[200, 700]}
                offset={[80, 0]}
                zIndex="999"
                render={(attrs) => (
                    <div
                        className="share-action__wrapper"
                        tabIndex="-1"
                        {...attrs}
                    >
                        <Popper>
                            {expanded
                                ? EXPANDED_SHARE_MENU.map((item, index) => (
                                      <div
                                          className="share-action__wrapper__item"
                                          key={index}
                                      >
                                          {item.icon} {item.title}
                                      </div>
                                  ))
                                : SHARE_MENU.map((item, index) => (
                                      <div
                                          className="share-action__wrapper__item"
                                          key={index}
                                      >
                                          {item.icon} {item.title}
                                      </div>
                                  ))}
                            {!expanded && (
                                <div
                                    className="share-action__wrapper__btn--more"
                                    onClick={() => setExpanded(!expanded)}
                                >
                                    <ChevronDownIcon />
                                </div>
                            )}
                        </Popper>
                    </div>
                )}
                onShow={() => setExpanded(false)}                
            >
                {props.children}
            </Tippy>
        </div>
    );
};

ShareAction.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ShareAction;
