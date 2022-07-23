import React from "react"
import SearchBar from "../SearchBar/searchBar";
import FeaturedVideo from "../widgets/items/featuredVideo";
import PopularArticles from "../widgets/items/popularArticles";

import bodySectionStyle from "./bodySection.module.scss";
import SectionCard from "./sectionCard";

const HomeBodySection = (props) => {
    const { Categories } = props;

    return <div className={`container ${bodySectionStyle.home_bodyContainer}`}>
        <div className="row">
            <div className={`col-md-8 ${bodySectionStyle.card_section}`}>
                <SearchBar />
                {Categories.map((category) => {
                    return <SectionCard key={category.id} category={category} />
                })}
            </div>
            <div className={`col-md-4 ${bodySectionStyle.sidebar_section}`}>
                <PopularArticles />
                <FeaturedVideo />
            </div>
        </div>
    </div>
}
export default HomeBodySection;