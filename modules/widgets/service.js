import { gql } from "@apollo/client"

import client from "../../apollo-client";
import WidgetsQuery from "./query";

export async function fetchMostReadPost() {
    const { data } = await client.query({
        query: gql`${WidgetsQuery.mostReadPostData}`
    })
    return data;
}

export async function fetchFeaturedVideos() {
    const { data } = await client.query({
        query: gql`${WidgetsQuery.featuredVideosData}`
    })
    return data;
} 
