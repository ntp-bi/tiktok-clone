import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import Helmet from "../../components/helmet/Helmet";
import VideoPreview from "../../components/video-preview/VideoPreview";

import { explore } from "../../api/explore";

import "./explore.scss";

const categories = [
    "All",
    "Sports",
    "Anime & Comics",
    "Relationship",
    "Shows",
    "Lipsync",
    "Daily Life",
    "Beauty Care",
    "Games",
    "Society",
    "Outfit",
    "Cars",
    "Food",
    "Animals",
];

const Explore = () => {
    const [videos, setVideos] = useState([]);
    const [active, setActive] = useState("All");

    useEffect(() => {
        const fetchApi = async () => {
            const result = await explore("for-you");
            setVideos(result);
            console.log(result);
        };

        fetchApi();
    }, []);

    return (
        <Helmet title="Explore - Find your favourite videos on TikTok">
            <div className="explore">
                <div className="explore__wrapper">
                    <div className="swiper-container explore__wrapper__header">
                        <Swiper slidesPerView="auto" spaceBetween={10} freeMode>
                            {categories.map((category) => (
                                <SwiperSlide key={category}>
                                    <button
                                        className={`category-item ${
                                            active === category ? "active" : ""
                                        }`}
                                        onClick={() => setActive(category)}
                                    >
                                        {category}
                                    </button>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="explore__wrapper__content">
                        {videos.map((item, index) => (
                            <VideoPreview item={item} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Explore;
