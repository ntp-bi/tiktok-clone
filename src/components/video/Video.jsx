import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";

import Image from "../image/Image";
import Button from "../button/Button";
import Popper from "../popper/Popper";
import VideoItem from "../video-item/VideoItem";
import { ModalContext } from "../ModalProvider/ModalProvider";

import { MusicIcon } from "../icons/Icon";

import "./video.scss";

const Video = (props) => {
    const data = props.data;
    const context = useContext(ModalContext);

    return (
        <div className="video">
            <div className="video__header">
                <div className="video__header__wrapper">
                    <Image
                        className="video__header__wrapper__image"
                        src={data?.user.avatar}
                    />
                    <Link
                        to={`/profile/${encodeURIComponent(data?.user.nickname)}`}
                        className="video__header__wrapper__info"
                    >
                        <div className="video__header__wrapper__info__user">
                            <Tippy
                                interactive
                                placement="bottom"
                                delay={[700, 0]}
                                offset={[40, 20]}
                                zIndex="99"
                                render={(attrs) => (
                                    <div tabIndex="-1" {...attrs}>
                                        <Popper>
                                            <div className="suggested-accounts__preview">
                                                <div className="suggested-accounts__preview__header">
                                                    <Image
                                                        className="suggested-accounts__preview__header__avatar"
                                                        src={data?.user.avatar}
                                                        alt=""
                                                    />
                                                    <Button
                                                        outline
                                                        className="suggested-accounts__preview__header__btn--follow"
                                                    >
                                                        <span>Follow</span>
                                                    </Button>
                                                </div>
                                                <div className="suggested-accounts__preview__body">
                                                    <p className="suggested-accounts__preview__body__nickname">
                                                        <strong>
                                                            {
                                                                data?.user
                                                                    .nickname
                                                            }
                                                        </strong>
                                                        {data?.tick && (
                                                            <FontAwesomeIcon
                                                                icon={
                                                                    faCheckCircle
                                                                }
                                                                className="check"
                                                            />
                                                        )}
                                                    </p>
                                                    <p className="suggested-accounts__preview__body__name">
                                                        {data?.user.full_name ||
                                                            `${data?.user.first_name} ${data?.user.last_name}`}
                                                    </p>
                                                    <p className="suggested-accounts__preview__body__analytics">
                                                        <strong className="value">
                                                            {
                                                                data?.user
                                                                    .followers_count
                                                            }
                                                        </strong>
                                                        <span className="label">
                                                            Followers
                                                        </span>
                                                        <strong className="value">
                                                            {
                                                                data?.user
                                                                    .followings_count
                                                            }
                                                        </strong>
                                                        <span className="label">
                                                            Likes
                                                        </span>
                                                    </p>
                                                    <div className="suggested-accounts__preview__body__desc">
                                                        <span>
                                                            {data?.user.bio}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Popper>
                                    </div>
                                )}
                            >
                                <h4>{data?.user.nickname}</h4>
                            </Tippy>
                            <span>
                                {`${data?.user.first_name} ${data?.user.last_name}`}
                            </span>
                        </div>
                        <div className="video__header__wrapper__info__desc">
                            {data?.description}
                        </div>
                        <div className="video__header__wrapper__info__icon">
                            <MusicIcon className="icon--music" />
                            {data?.music}
                        </div>
                    </Link>
                </div>
                <div className="video__header__btn">
                    <Button outline onClick={context.handleShowModal}>            
                        Follow
                    </Button>
                </div>
            </div>
            <div className="video__body">
                <VideoItem data={data} />
            </div>
        </div>
    );
};

Video.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Video;
