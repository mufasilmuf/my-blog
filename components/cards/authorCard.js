import { Box, Card } from "@mui/material";
import React from "react";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";

import { TrimFunction } from "../../utils/functions/helper-function";
import authorCardStyle from "./articleCard.module.scss";

const AuthorCard = (props) => {
    const { authorDetails } = props

    return <div className={authorCardStyle.author_card_container}>
        <h3>About Author</h3>
        <div className={authorCardStyle.author_card}>
            <Box >
                <img src={authorDetails.picture.url} alt="logo" />
            </Box>
            <Box>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <span className={authorCardStyle.authorCard_name}>{authorDetails.name}</span>
                    <span>
                        <Facebook />
                        <Twitter />
                        <LinkedIn />
                    </span>
                </Box>
                <p className={authorCardStyle.author_details}>{TrimFunction(authorDetails.details, 400)}</p>
            </Box>
        </div>
    </div>
}
export default AuthorCard;