import React, { useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import Button from "../button/Button";
import ShareAction from "../share-action/ShareAction";
import { ModalContext } from "../ModalProvider/ModalProvider";

import {
    CommentIcon,
    HeartIcon,
    MutedIcon,
    PauseIcon,
    PlaySolidIcon,
    ShareSolidIcon,
    VolumeIcon,
} from "../icons/Icon";

import "./video-item.scss";

const VideoItem = (props) => {
    const data = props.data;

    const [mute, setMute] = useState(true);
    const [volume, setVolume] = useState(0.4);
    const [isPlaying, setIsPlaying] = useState(false);
    const [prevVolume, setPrevVolume] = useState(volume);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const context = useContext(ModalContext);

    const videoRef = useRef(null);
    const progressRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = mute ? 0 : volume;
            setDuration(videoRef.current.duration);
        }
    }, [mute, volume]);

    useEffect(() => {
        const handleScroll = () => playVideoInViewport();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleAdjustVolume = (e) => {
        setVolume(e.target.value / 100);
    };

    const toggleMute = () => {
        if (mute) {
            setVolume(prevVolume);
            setMute(false);
        } else {
            setPrevVolume(volume);
            setVolume(0);
            setMute(true);
        }
    };

    const playVideo = () => {
        if (videoRef.current && !isPlaying) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const pauseVideo = () => {
        if (videoRef.current && isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const togglePlayVideo = () => {
        if (isPlaying) {
            pauseVideo();
        } else {
            playVideo();
        }
    };

    const playVideoInViewport = () => {
        if (videoRef.current) {
            const bounding = videoRef.current.getBoundingClientRect();

            if (
                bounding.top >= 0 &&
                bounding.left >= 0 &&
                bounding.right <=
                    (window.innerWidth ||
                        document.documentElement.clientWidth) &&
                bounding.bottom <=
                    (window.innerHeight ||
                        document.documentElement.clientHeight)
            ) {
                playVideo();
            } else {
                pauseVideo();
            }
        }
    };

    const handleProgressChange = (e) => {
        const newTime = (e.target.value / 100) * duration;
        setCurrentTime(newTime);
        if (videoRef.current) {
            videoRef.current.currentTime = newTime;
        }
    };

    useEffect(() => {
        const updateProgress = () => {
            if (videoRef.current) {
                setCurrentTime(videoRef.current.currentTime);
                setDuration(videoRef.current.duration);
            }
        };

        videoRef.current?.addEventListener("timeupdate", updateProgress);
        return () =>
            videoRef.current?.removeEventListener("timeupdate", updateProgress);
    }, []);

    return (
        <div className="video-item">
            <div className="video-item__wrapper">
                <video
                    className="video-item__wrapper__video"
                    style={
                        data?.meta.video.resolution_x <
                        data?.meta.video.resolution_y
                            ? { width: "400px" }
                            : { width: "750px" }
                    }
                    loop
                    ref={videoRef}
                    src={data?.file_url}
                ></video>
                <div className="video-item__wrapper__control">
                    <div
                        className="video-item__wrapper__control__play"
                        onClick={togglePlayVideo}
                    >
                        {isPlaying ? <PauseIcon /> : <PlaySolidIcon />}
                    </div>

                    <div className="video-item__wrapper__control__progress">
                        <input
                            className="range"
                            type="range"
                            min="0"
                            max="100"
                            step="0.1"
                            value={(currentTime / duration) * 100 || 0}
                            onChange={handleProgressChange}
                            ref={progressRef}
                        />
                    </div>

                    <div className="video-item__wrapper__control__volume">
                        <input
                            type="range"
                            min="0"
                            max="100"
                            step="1"
                            orient="vertical"
                            onChange={handleAdjustVolume}
                            value={volume * 100}
                        />
                        <div
                            className="video-item__wrapper__control__volume__icon--mute"
                            onClick={toggleMute}
                        >
                            {mute ? <MutedIcon /> : <VolumeIcon />}
                        </div>
                    </div>
                </div>
            </div>
            <div className="video-item__actions">
                <div className="video-item__actions__btn">
                    <Button className="btn" onClick={context.handleShowModal}>
                        <HeartIcon />
                    </Button>
                    <p>{data?.likes_count}</p>
                </div>
                <div className="video-item__actions__btn">
                    <Button className="btn" onClick={context.handleShowModal}>
                        <CommentIcon />
                    </Button>
                    <p>{data?.comments_count}</p>
                </div>
                <ShareAction offset={[70, 0]}>
                    <div className="video-item__actions__btn">
                        <Button
                            className="btn"
                            onClick={context.handleShowModal}
                        >
                            <ShareSolidIcon />
                        </Button>
                        <p>{data?.shares_count}</p>
                    </div>
                </ShareAction>
            </div>
        </div>
    );
};

VideoItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default VideoItem;
