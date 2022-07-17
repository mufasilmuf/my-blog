import React from "react";

import ArticleCard from "../cards/articleCards";
import WrapperStyle from "./bodySection.module.scss";

const Wrapper = (props) => {
    const { articles, slug, postLink } = props;

    return <div div className={WrapperStyle.wrapper_container} >
        {articles.map((article) => {
            return <ArticleCard key={article.id} data={article} categorySlug={slug} status={postLink} />
        })}
    </div>
}
export default Wrapper;