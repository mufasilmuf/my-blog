import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { PlayCircleFilledRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";

import FeatureVideoStyle from "../styles/featuredVideo.module.scss";


const FeaturedVideo = (props) => {
    const { videos } = props;

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return <div className={FeatureVideoStyle.featuredVideo_container}>
        <p className={FeatureVideoStyle.featuredVideo_title}>Featured Videos</p>
        <Carousel activeIndex={index} onSelect={handleSelect} className={FeatureVideoStyle.featureVideo_container_card}>
            {videos.map((item) => {
                return <Carousel.Item key={item.id}>
                    <div className={FeatureVideoStyle.featureVideo_card}>
                        <img className={FeatureVideoStyle.featuredVideo_video} src={item.poster_img.url} alt={item.id} />
                        <div className={FeatureVideoStyle.featuredVideo_details}>
                            <IconButton>
                                <PlayCircleFilledRounded className={FeatureVideoStyle.play_button} />
                            </IconButton>
                            <div className={FeatureVideoStyle.video_descripition}>{item.descripiton}</div>
                        </div>
                    </div>
                </Carousel.Item>
            })}
        </Carousel>
    </div>
}
export default FeaturedVideo;