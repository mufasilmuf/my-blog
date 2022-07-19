import React from "react"
import ArticleCard from "../cards/articleCards";

import bodySectionStyle from "./bodySection.module.scss";
import SearchBar from "../SearchBar/searchBar";
import Wrapper from "./wrapper";

const BodySection = (props) => {
    const { categoryDetails } = props;

    return <div className={`container ${bodySectionStyle.main_container}`}>
        <div className="row">
            <div className={`col-md-8 ${bodySectionStyle.card_section}`}>
                <SearchBar />
                <h1>{categoryDetails[0].name}</h1>
                <Wrapper articles={categoryDetails[0].articles} slug={categoryDetails[0].slug} />
            </div>
            <div className={`col-md-4 ${bodySectionStyle.sidebar_section}`}>
                <div></div>
            </div>
        </div>
    </div>
}
export default BodySection;