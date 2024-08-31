import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import Helmet from "../../components/helmet/Helmet";
import SidebarUpload from "../../components/sidebar-upload/SidebarUpload";
import Button from "../../components/button/Button";

import { TryIcon, UploadFileIcon } from "../../components/icons/Icon";

import "./upload.scss";
import { images } from "../../assets/images/images";

const Upload = () => {
    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });

    return (
        <Helmet title="TikTok Studio">
            <div className="upload">
                <div className="upload__wrapper">
                    <aside className="upload__wrapper__sidebar">
                        <SidebarUpload />
                    </aside>
                    <div className="upload__wrapper__content">
                        <div className="upload__wrapper__content__container">
                            <div {...getRootProps()} className="upload-box">
                                <input {...getInputProps()} />
                                <div className="upload-box__content">
                                    <div className="upload-box__icon">
                                        <UploadFileIcon />
                                    </div>
                                    <p className="upload-box__text">
                                        {isDragActive
                                            ? "Thả file vào đây ..."
                                            : "Select video to upload"}
                                    </p>
                                    <p className="upload-box__subtext">
                                        Or drag and drop it here
                                    </p>
                                    <Button
                                        primary
                                        className="upload-box__button"
                                    >
                                        Select video
                                    </Button>
                                </div>
                            </div>
                            <div className="upload-box__requirements">
                                <div className="upload-box__requirements__items">
                                    <img
                                        src={images.camera}
                                        alt=""
                                        className="image"
                                    />
                                    <div className="item">
                                        <p>Size and duration</p>
                                        <p>
                                            Maximum size: 10 GB, video duration:
                                            60 minutes.
                                        </p>
                                    </div>
                                </div>
                                <div className="upload-box__requirements__items">
                                    <img
                                        src={images.file}
                                        alt=""
                                        className="image"
                                    />
                                    <div className="item">
                                        <p>File formats</p>
                                        <p>
                                            Recommended: “.mp4”. Other major
                                            formats are supported.
                                        </p>
                                    </div>
                                </div>
                                <div className="upload-box__requirements__items">
                                    <img
                                        src={images.i720}
                                        alt=""
                                        className="image"
                                    />
                                    <div className="item">
                                        <p>Video resolutions</p>
                                        <p>
                                            Minimum resolution: 720p. 2K and 4K
                                            are supported.
                                        </p>
                                    </div>
                                </div>
                                <div className="upload-box__requirements__items">
                                    <img
                                        src={images.cut}
                                        alt=""
                                        className="image"
                                    />
                                    <div className="item">
                                        <p>Aspect ratios</p>
                                        <p>
                                            Recommended: 16:9 for landscape,
                                            9:16 for vertical.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="upload__wrapper__content__footer">
                            <div className="upload__wrapper__content__footer__content">
                                <p>
                                    Create high quality videos on CapCut Online
                                </p>
                                <p>
                                    Automatically shorten your videos and create
                                    videos from scripts with AI-powered
                                    features.
                                </p>
                            </div>
                            <button>
                                <TryIcon />
                                Try now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Upload;
