import React, { useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { ChevronDownIcon, QRIcon, UserIcon, XMarkIcon } from "../icons/Icon";
import { images } from "../../assets/images/images";
import Button from "../button/Button";

import "./modal.scss";

const Modal = (props) => {
    const [formLogin, setFormLogin] = useState("login");
    const [filteredForm, setFilteredForm] = useState([]);

    const onHide = props.onHide;

    const loginRegisterForm = useMemo(
        () => [
            {
                type: "login",
                title: "Log in to TikTok",
                contents: [
                    {
                        icon: <QRIcon />,
                        title: "Use QR code",
                    },
                    {
                        icon: <UserIcon />,
                        title: "Use phone / email / username",
                    },
                    {
                        icon: <img src={images.facebook} alt="" />,
                        title: "Continue with Facebook",
                    },
                    {
                        icon: <img src={images.google} alt="" />,
                        title: "Continue with Google",
                    },
                    {
                        icon: <img src={images.twitter} alt="" />,
                        title: "Continue with Twitter",
                    },
                    {
                        icon: <img src={images.line} alt="" />,
                        title: "Continue with LINE",
                    },
                    {
                        icon: <img src={images.kakaotalk} alt="" />,
                        title: "Continue with KakaoTalk",
                    },
                    {
                        icon: <img src={images.apple} alt="" />,
                        title: "Continue with Apple",
                    },
                    {
                        icon: <img src={images.instagram} alt="" />,
                        title: "Continue with Instagram",
                    },
                ],
            },
            {
                type: "register",
                title: "Sign up for TikTok",
                showMore: true,
                contents: [
                    {
                        icon: <UserIcon />,
                        title: "Use phone or email",
                    },
                    {
                        icon: <img src={images.facebook} alt="" />,
                        title: "Continue with Facebook",
                    },
                    {
                        icon: <img src={images.google} alt="" />,
                        title: "Continue with Google",
                    },
                ],
            },
            {
                type: "register-expanded",
                title: "Sign up for TikTok",
                contents: [
                    {
                        icon: <UserIcon />,
                        title: "Use phone or email",
                    },
                    {
                        icon: <img src={images.facebook} alt="" />,
                        title: "Continue with Facebook",
                    },
                    {
                        icon: <img src={images.google} alt="" />,
                        title: "Continue with Google",
                    },
                    {
                        icon: <img src={images.twitter} alt="" />,
                        title: "Continue with Twitter",
                    },
                    {
                        icon: <img src={images.line} alt="" />,
                        title: "Continue with LINE",
                    },
                    {
                        icon: <img src={images.kakaotalk} alt="" />,
                        title: "Continue with KakaoTalk",
                    },
                ],
            },
        ],
        []
    );

    useEffect(() => {
        const newForm = loginRegisterForm.find(
            (form) => form.type === formLogin
        );
        setFilteredForm(newForm);
    }, [loginRegisterForm, formLogin]);

    return (
        <div className="modal">
            <div className="modal__wrapper">
                <div className="modal__wrapper__container">
                    <div className="modal__wrapper__container__inner">
                        <div className="modal__wrapper__container__inner__title">
                            {filteredForm.title}
                        </div>
                        <div className="modal__wrapper__container__inner__list">
                            {filteredForm.contents?.map((item, index) => (
                                <Button
                                    key={index}
                                    onClick={item.onClick}
                                >
                                    <span className="icon">{item.icon}</span>
                                    <span className="title">{item.title}</span>
                                </Button>
                            ))}
                            {filteredForm.showMore && (
                                <div
                                    className="more-btn"
                                    onClick={() =>
                                        setFormLogin("register-expanded")
                                    }
                                >
                                    <ChevronDownIcon />
                                </div>
                            )}
                        </div>
                    </div>
                    {formLogin.startsWith("register") && (
                        <div className="agreement">
                            <p>
                                By continuing, you agree to TikTok's
                                <Link to="/">Terms of Service</Link> and confirm
                                that you have read TikTok's
                                <Link to="/">Privacy Policy</Link>.
                            </p>
                        </div>
                    )}
                    <div className="modal__wrapper__container__footer">
                        {formLogin === "login" ? (
                            <>
                                Don't have an account?
                                <p onClick={() => setFormLogin("register")}>
                                    Sign up
                                </p>
                            </>
                        ) : (
                            <>
                                Already have an account?
                                <p onClick={() => setFormLogin("login")}>
                                    Log in
                                </p>
                            </>
                        )}
                    </div>
                </div>
                <div className="close-btn" onClick={onHide}>
                    <XMarkIcon />
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    onHide: PropTypes.func,
};

export default Modal;
