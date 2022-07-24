import { gql } from "@apollo/client";

import client from "../../apollo-client";
import ArticlesQueries from "./query";

export async function fetchHomePagePost() {
    const { data } = await client.query({
        query: gql`${ArticlesQueries.homePagePostAPI}`
    });
    return data;
}

export async function fetchCategoryPostAPI(slug) {
    const { data } = await client.query({
        query: gql`${ArticlesQueries.categoryPostAPI}`,
        variables: { category_slug: slug }
    })
    return data;
}

export async function fetchPostDetail(slug) {
    const { data } = await client.query({
        query: gql`${ArticlesQueries.postDetailAPI}`,
        variables: { article_slug: slug },
    })
    return data
}

export async function fetchRelatedPost(slug) {
    const { data } = await client.query({
        query: gql`${ArticlesQueries.relatedPostAPI}`,
        variables: { category_slug: slug }
    })
    return data
}