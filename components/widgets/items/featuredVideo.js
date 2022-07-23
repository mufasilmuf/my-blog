import React from "react";
import { PlayCircleFilledRounded } from "@mui/icons-material";

import FeatureVideoStyle from "../styles/featuredVideo.module.scss";
import { IconButton } from "@mui/material";

const FeaturedVideo = (props) => {
    return <div className={FeatureVideoStyle.featuredVideo_container}>
        <p className={FeatureVideoStyle.featuredVideo_title}>Featured Videos</p>
        <div className={FeatureVideoStyle.featureVideo_card}>
            <img className={FeatureVideoStyle.featuredVideo_video} src="https://res.cloudinary.com/dirosugvb/image/upload/v1658563391/images_q_tbn_A_Nd9_Gc_Qc_Hyy4_Lm_D_Xxjo_W7kpo_O_Fo_LD_0_X_82_E2_C_hi_FQ_and_usqp_CAU_e245e55656.jpg" alt="img" />
            <div className={FeatureVideoStyle.featuredVideo_details}>
                <IconButton>
                    <PlayCircleFilledRounded className={FeatureVideoStyle.play_button} />
                </IconButton>
                <div className={FeatureVideoStyle.video_descripition}>Let broccoli take centre stage in our rame broccoli take centre stage in our rame</div>
            </div>
        </div>
    </div>
}
export default FeaturedVideo;