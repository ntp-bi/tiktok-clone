import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import Tippy from "@tippyjs/react/headless";

import { profile } from "../../api/profile";

import Image from "../../components/image/Image";
import Helmet from "../../components/helmet/Helmet";
import Button from "../../components/button/Button";
import Popper from "../../components/popper/Popper";
import ShareAction from "../../components/share-action/ShareAction";
import VideoPreview from "../../components/video-preview/VideoPreview";

import { ModalContext } from "../../components/ModalProvider/ModalProvider";

import {
    BanIcon,
    EllipsisHorizontalIcon,
    FlagIcon,
    LinkIcon,
    LockedIcon,
    ShareIcon,
    TickIcon,
    UserRegularIcon,
} from "../../components/icons/Icon";

import "./profile.scss";

function Profile() {
    const { nickname } = useParams();
    const context = useContext(ModalContext);

    const [userData, setUserData] = useState([]);
    const [activeTab, setActiveTab] = useState("videos");
    const [activeBtnTab, setActiveBtnTab] = useState("latest");
    const [isShareVisible, setIsShareVisible] = useState(false);
    const [isMoreVisible, setIsMoreVisible] = useState(false);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const result = await profile(nickname);
                setUserData(result);
            } catch (error) {
                console.log(error);
            }
        };

        fetchApi();
    }, [nickname]);

    return (
        <Helmet
            title={`${userData?.first_name} ${userData?.last_name} (@${nickname}) | TikTok`}
        >
            <div className="profile">
                <div className="profile__wrapper">
                    <div className="profile__wrapper__header">
                        <div className="profile__wrapper__header__image">
                            <Image src={userData?.avatar} alt="avatar" />
                        </div>
                        <div className="profile__wrapper__header__info">
                            <div className="profile__wrapper__header__info__username">
                                <span className="nickname">
                                    {userData?.nickname}
                                </span>
                                {userData?.tick && (
                                    <TickIcon className="icon--tick" />
                                )}
                                <span className="fullname">
                                    {userData?.first_name +
                                        " " +
                                        userData?.last_name}
                                </span>
                            </div>
                            <div className="profile__wrapper__header__info__btns">
                                <Button
                                    className="btn--follow"
                                    onClick={context.handleShowModal}
                                >
                                    Follow
                                </Button>
                                <Button
                                    className="btn--message"
                                    onClick={context.handleShowModal}
                                >
                                    Message
                                </Button>
                                <ShareAction
                                    offset={[0, 20]}
                                    visible={isShareVisible}
                                    onClickOutside={() =>
                                        setIsShareVisible(false)
                                    }
                                >
                                    <div
                                        className="btn--share"
                                        onClick={() =>
                                            setIsShareVisible((prev) => !prev)
                                        }
                                    >
                                        <ShareIcon
                                            width="1.9rem"
                                            height="1.9rem"
                                        />
                                    </div>
                                </ShareAction>
                                <div className="btn--more">
                                    <Tippy
                                        interactive
                                        hideOnClick={true}
                                        placement="bottom-end"
                                        delay={[0, 700]}
                                        offset={[70, 26]}
                                        zIndex="99"
                                        visible={isMoreVisible}
                                        onClickOutside={() =>
                                            setIsMoreVisible(false)
                                        }
                                        render={(attrs) => (
                                            <div tabIndex="-1" {...attrs}>
                                                <Popper>
                                                    <div>
                                                        <FlagIcon /> Report
                                                    </div>
                                                    <span></span>
                                                    <div>
                                                        <BanIcon /> Block
                                                    </div>
                                                </Popper>
                                            </div>
                                        )}
                                    >
                                        <div
                                            onClick={() =>
                                                setIsMoreVisible(
                                                    (prev) => !prev
                                                )
                                            }
                                        >
                                            <EllipsisHorizontalIcon
                                                width="1.9rem"
                                                height="1.9rem"
                                            />
                                        </div>
                                    </Tippy>
                                </div>
                            </div>
                            <div className="profile__wrapper__header__info__count">
                                <div>
                                    {userData.followings_count}
                                    <span className="underline">Following</span>
                                </div>
                                <div>
                                    {userData.followers_count}
                                    <span className="underline">Followers</span>
                                </div>
                                <div>
                                    {userData.likes_count}
                                    <span>Likes</span>
                                </div>
                            </div>
                            <div className="profile__wrapper__header__info__bio">
                                {userData.bio}
                            </div>
                            <div className="profile__wrapper__header__info__link">
                                <LinkIcon />
                                {userData.website_url}
                            </div>
                        </div>
                    </div>
                    <div className="profile__wrapper__tabs">
                        <div className="profile__wrapper__tabs__tab">
                            <div
                                className={`profile__wrapper__tabs__tab__item ${
                                    activeTab === "videos" ? "active" : ""
                                }`}
                                onClick={() => setActiveTab("videos")}
                            >
                                Videos
                            </div>
                            <div
                                className={`profile__wrapper__tabs__tab__item ${
                                    activeTab === "reposts" ? "active" : ""
                                }`}
                                onClick={() => setActiveTab("reposts")}
                            >
                                Reposts
                            </div>
                            <div
                                className={`profile__wrapper__tabs__tab__item ${
                                    activeTab === "liked" ? "active" : ""
                                }`}
                                onClick={() => setActiveTab("liked")}
                            >
                                <LockedIcon /> Liked
                            </div>
                        </div>
                        <div className="profile__wrapper__tabs__tab">
                            <div className="profile__wrapper__tabs__tab__btns">
                                <button
                                    className={`profile__wrapper__tabs__tab__btns__btn ${
                                        activeBtnTab === "latest"
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() => setActiveBtnTab("latest")}
                                >
                                    Latest
                                </button>
                                <button
                                    className={`profile__wrapper__tabs__tab__btns__btn ${
                                        activeBtnTab === "popular"
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() => setActiveBtnTab("popular")}
                                >
                                    Popular
                                </button>
                                <button
                                    className={`profile__wrapper__tabs__tab__btns__btn ${
                                        activeBtnTab === "oldest"
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() => setActiveBtnTab("oldest")}
                                >
                                    Oldest
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="profile__wrapper__videos">
                        <h3>Videos</h3>
                        <div className="profile__wrapper__videos__video">
                            {userData?.videos?.length > 0 ? (
                                userData.videos.map((item, index) => (
                                    <div className="profile__wrapper__videos__video__item">
                                        <VideoPreview key={index} item={item} />
                                    </div>
                                ))
                            ) : (
                                <div>
                                    <UserRegularIcon />
                                    <p className="title">No content</p>
                                    <p className="description">
                                        This user has not published any videos.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    );
}

export default Profile;
