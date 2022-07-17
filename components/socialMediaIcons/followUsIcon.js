import { FacebookOutlined, LinkedIn, Instagram, Twitter, Pinterest } from "@mui/icons-material";
import React from "react";

import socailMediaStyle from "./socialMediaIcon.module.scss";

const FollowUs = () => {
    return <div>
        <span className={socailMediaStyle.followUs_text}>Follow us:</span>
        <FacebookOutlined className={socailMediaStyle.socailMedia_icon} />
        <LinkedIn className={socailMediaStyle.socailMedia_icon} />
        <Instagram className={socailMediaStyle.socailMedia_icon} />
        <Twitter className={socailMediaStyle.socailMedia_icon} />
        <Pinterest className={socailMediaStyle.socailMedia_icon} />
    </div>
}
export default FollowUs;