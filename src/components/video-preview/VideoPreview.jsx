import React, { useRef } from "react";
import PropTypes from "prop-types";
import { PlayIcon } from "../icons/Icon";

import "./video-preview.scss";

const VideoPreview = (props) => {
    const item = props.item;
    const videoRef = useRef(null);

    return (
        <div className="video-preview">
            <div
                className="video-preview__wrapper"
                onMouseEnter={() => videoRef.current.play()}
            >
                <div className="video-preview__wrapper__inner">
                    <div className="video-preview__wrapper__inner__image">
                        <img src={item.thumb_url} alt="" />
                    </div>
                    <div className="video-preview__wrapper__inner__video">
                        <video muted ref={videoRef} src={item.file_url}></video>
                    </div>
                    <div className="video-preview__wrapper__inner__views">
                        <PlayIcon />
                        <strong className="video-preview__wrapper__inner__views__count">
                            {item.views_count}
                        </strong>
                    </div>
                </div>
            </div>
        </div>
    );
};

VideoPreview.propTypes = {
    item: PropTypes.object.isRequired,
};

export default VideoPreview;
