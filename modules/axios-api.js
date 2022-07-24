import axios from "axios";

export async function updateViewCount(id, views) {
    axios({
        method: 'PUT',
        url: `${process.env.STRAPI_URL + "/" + "articles" + "/" + id}`,
        data: {
            views: views + 1
        }
    })
}