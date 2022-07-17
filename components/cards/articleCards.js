import React from "react";
import { Card, Box, IconButton } from '@mui/material';
import { Badge } from "react-bootstrap";
import Link from "next/link";

import articleCardStyle from "./articleCard.module.scss";
import { TrimFunction, DateConvertor } from '../../utils/functions/helper-function';

const ArticleCard = (props) => {
    const strapi_url = process.env.STRAPI_URL;
    const { data, categorySlug, status } = props;

    return <Card className={articleCardStyle.article_card}>
        <Link href={status ? {
            pathname: '/[category]/[post]',
            query: { category: categorySlug, post: data.slug },
        } : categorySlug + '/' + data.slug} >
            <img className={articleCardStyle.card_header_image} src={strapi_url + data.image.url} alt={data.title} />
        </Link>
        <Box padding={2}>
            <Badge bg="light" text="dark" as="span" className={articleCardStyle.category_badge}>{data.category.name}</Badge>
            <div className={articleCardStyle.article_title}>{data.title}</div>
            <Box className={articleCardStyle.article_description}>{TrimFunction(data.description, 75)}</Box>
        </Box>
        <Box paddingX={2} paddingY={1} className={articleCardStyle.article_info} >
            <Box className={articleCardStyle.article_createdAt}>{DateConvertor(data.createdAt)}</Box>
            <Link href={status ? data.slug : categorySlug + '/' + data.slug} >
                <Box className={articleCardStyle.readArticle_btn}>Read More&gt;&gt;</Box>
            </Link>
        </Box>
    </Card>
}
export default ArticleCard;