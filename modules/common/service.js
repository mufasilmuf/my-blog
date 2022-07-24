import { gql } from "@apollo/client";

import client from "../../apollo-client";
import Common from "./query";

export async function fetchHeaderData() {
    const { data } = await client.query({
        query: gql`${Common.headerData}`
    })
    return data;
}