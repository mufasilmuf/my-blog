import React from "react";

import postDetailStyle from "./bodySection.module.scss";
import { DateConvertor, reduceArray } from "../../utils/functions/helper-function"
import AuthorCard from "../cards/authorCard";
import Wrapper from "./wrapper";
import CommentCard from "../comment/comment";

const PostDetail = (props) => {
    const strapi_url = process.env.STRAPI_URL;
    const { postDetails, relatedPost, category_slug } = props;

    return <div className={`container ${postDetailStyle.post_container}`}>
        <div className="row">
            <div className={`col-md-8 ${postDetailStyle.card_section}`}>
                <img src={strapi_url + postDetails[0].poster_image[0].url} alt="logo" width="100%" height="350px" className={postDetailStyle.poster_img} />
                <ul className={postDetailStyle.post_updateInfo}>
                    <li><b>Category</b>: {postDetails[0].category.name}</li>
                    <li><b>By</b>: {postDetails[0].author.name}</li>
                    <li><b>On</b>: {DateConvertor(postDetails[0].createdAt)}</li>
                </ul>
                <h3>{postDetails[0].title}</h3>
                <div dangerouslySetInnerHTML={{ __html: postDetails[0].content }} />
                <AuthorCard authorDetails={postDetails[0].author} />
                <h3 className={postDetailStyle.related_title}>Related Articles</h3>
                <Wrapper articles={reduceArray(relatedPost, 3)} slug={category_slug} />
                <h3 className={postDetailStyle.related_title}>Comments</h3>
                <CommentCard />
            </div>
            <div className={`col-md-4 ${postDetailStyle.sidebar_section}`}></div>
        </div>
    </div>
}
export default PostDetail;