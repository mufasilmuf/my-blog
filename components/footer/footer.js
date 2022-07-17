import React from "react";
import { Facebook, LinkedIn, Instagram, Pinterest } from "@mui/icons-material";
import footerStyle from "./footer.module.scss";

const Footer = () => {
    return <div className={footerStyle.footer}>
        <div className={`container ${footerStyle.footer_container}`}>
            <div className={footerStyle.app_logo}>CookBook</div>
            <div className={footerStyle.icon_group}>
                <Facebook className={footerStyle.icon_item} />
                <LinkedIn className={footerStyle.icon_item} />
                <Instagram className={footerStyle.icon_item} />
                <Pinterest className={footerStyle.icon_item} />
            </div>
            <div className={footerStyle.horizontal_line}></div>
            <ul className={footerStyle.details}>
                <li>Articles</li>
                <li>News</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
        </div>
    </div>
}
export default Footer;