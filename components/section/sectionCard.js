import React from "react";
import { Box } from "@mui/material";
import ArticleCard from "../cards/articleCards";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from "next/link";

import sectionCardStyle from "./bodySection.module.scss";
import Wrapper from "./wrapper";
import { reduceArray } from "../../utils/functions/helper-function";

const SectionCard = (props) => {
    const { category } = props;

    return <div className={sectionCardStyle.section_container}>
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
            <Link href={category.slug} passHref>
                <div className={sectionCardStyle.category_title}>{category.name}</div>
            </Link>
            <Link href={category.slug} passHref>
                <span className={sectionCardStyle.more_btn}>More Articles <ArrowForwardIcon fontSize="small" /></span>
            </Link>
        </Box>
        <Wrapper articles={reduceArray(category.articles, 3)} slug={category.slug} />
    </div>
}
export default SectionCard;