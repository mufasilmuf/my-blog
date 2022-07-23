import React from "react";

import PopularArtStyle from "../styles/popularArticles.module.scss";

const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

const PopularArticles = (props) => {
    return <div>
        <p className={PopularArtStyle.popular_title}>Popular Recipes</p>
        {data.map((item) => {
            return <div key={item.id} className={PopularArtStyle.popularPost_card}>
                <img className={PopularArtStyle.post_image} src="https://res.cloudinary.com/dirosugvb/image/upload/v1658564239/images_q_tbn_A_Nd9_Gc_Q_Otr_M_Xu_O878vl_Mw_U3o_Nof4c_JBS_3_QV_OI_Kk_Aw_and_usqp_CAU_4013257445.jpg" alt="image" />
                <div>
                    <div className={PopularArtStyle.post_title}>Tin Roof Ice Cream</div>
                    <div className={PopularArtStyle.post_description}>Do you roof ice cream go know how tin roof ice cream got its..</div>
                </div>
            </div>
        })}
    </div>
}
export default PopularArticles;