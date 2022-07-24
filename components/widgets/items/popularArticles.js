import Link from "next/link";
import React from "react";
import { TrimFunction } from "../../../utils/functions/helper-function";

import PopularArtStyle from "../styles/popularArticles.module.scss";

const PopularArticles = (props) => {
    const { post } = props;

    return <div>
        <p className={PopularArtStyle.popular_title}>Popular Recipes</p>
        {post.map((item) => {
            return <Link key={item.id} href={"/" + item.category.slug + "/" + item.slug} passHref>
                <div key={item.id} className={PopularArtStyle.popularPost_card}>
                    <img className={PopularArtStyle.post_image} src={item.image.url} alt={item.title} />
                    <div>
                        <div className={PopularArtStyle.post_title}>{item.title}</div>
                        <div className={PopularArtStyle.post_description}>{TrimFunction(item.description, 45)}</div>
                    </div>
                </div>
            </Link>
        })}
    </div>
}
export default PopularArticles;