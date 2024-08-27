import React from "react";
import Tippy from "@tippyjs/react/headless";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import Image from "../image/Image";
import Popper from "../popper/Popper";
import Button from "./../button/Button";

import "./suggested-accounts-item.scss";
import { Link } from "react-router-dom";

const SuggestedAccountsItem = (props) => {
    const data = props.data;
    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                offset={[-20, 0]}
                placement="bottom"
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs}>
                        <Popper>
                            <SuggestedAccountsPreview data={data} />
                        </Popper>
                    </div>
                )}
            >
                <Link to={`/@${data?.nickname}`}>
                    <div className="suggested-accounts__item">
                        <Image
                            src={data?.avatar}
                            alt=""
                            className="suggested-accounts__item__avatar"
                        />
                        <div className="suggested-accounts__item__info">
                            <p className="suggested-accounts__item__info__nickname">
                                <strong>{data?.nickname}</strong>
                                {data?.tick && (
                                    <FontAwesomeIcon
                                        icon={faCheckCircle}
                                        className="icon--check"
                                    />
                                )}
                            </p>
                            <p className="suggested-accounts__item__name">
                                {data?.full_name ||
                                    `${data?.first_name} ${data?.last_name}`}
                            </p>
                        </div>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
};

export const SuggestedAccountsPreview = (props) => {
    const data = props.data;

    return (
        <div className="suggested-accounts__preview">
            <div className="suggested-accounts__preview__header">
                <Image
                    className="suggested-accounts__preview__header__avatar"
                    src={data?.avatar}
                    alt=""
                />
                <Button
                    className="suggested-accounts__preview__header__btn--follow"
                    primary
                >
                    Follow
                </Button>
            </div>
            <div className="suggested-accounts__preview__body">
                <p className="suggested-accounts__preview__body__nickname">
                    <strong>{data?.nickname}</strong>
                    {data?.tick && (
                        <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="check"
                        />
                    )}
                </p>
                <p className="suggested-accounts__preview__body__name">
                    {data?.full_name ||
                        `${data?.first_name} ${data?.last_name}`}
                </p>
                <p className="suggested-accounts__preview__body__analytics">
                    <strong className="value">{data?.followers_count} </strong>
                    <span className="label">Followers</span>
                    <strong className="value">{data?.followings_count} </strong>
                    <span className="label">Likes</span>
                </p>
            </div>
        </div>
    );
};

export default SuggestedAccountsItem;
