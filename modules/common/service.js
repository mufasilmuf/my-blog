import client from "../../apollo-client";
import Common from "./query";

export async function fetchHeaderData() {
    const { data } = await client.query({
        query: `${Common.headerData}`
    })
    return data;
}