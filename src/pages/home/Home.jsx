import React, { useEffect, useState } from "react";
import { video } from "../../api/video";

import Video from "../../components/video/Video";

import "./home.scss";

const Home = () => {
    const [videos, setVideos] = useState([]);
    const [page, setPage] = useState(3);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await video("for-you", page);
            setVideos((prev) => [...prev, ...result]);         
        };

        fetchApi();
    }, [page]);

    const handleScroll = () => {
        if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
            setPage((page) => page + 1);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="home">
            {videos.map((item, index) => (
                <Video key={index} data={item} />
            ))}
        </div>
    );
};

export default Home;
