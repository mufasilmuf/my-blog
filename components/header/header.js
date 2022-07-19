import React from "react";
import Link from 'next/link';
import { Button } from "@mui/material";

import headerStyle from "./header.module.scss";
import SecondaryHeader from "./Navbar";
import { Classes } from "../../utils/themes/helper-style";

const Header = (props) => {
    const { HeaderData } = props;

    return <>
        <div className={headerStyle.header}>
            <div className={`container ${headerStyle.header_container}`}>
                <Link href="/">
                    <div className={headerStyle.header_logo}>CookBook</div>
                </Link>
                <div className={headerStyle.btn_group}>
                    <span>Login</span>
                    <Button style={Classes.btn_theme}>SignIn</Button>
                </div>
            </div>
        </div>
        <SecondaryHeader data={HeaderData} />
    </>
}
export default Header;