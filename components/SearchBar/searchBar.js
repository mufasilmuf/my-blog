
import { Box, Button } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';

import searchBarStyle from "./searchBar.module.scss";
import FollowUs from "../socialMediaIcons/followUsIcon";
import { Classes } from "../../utils/themes/helper-style";

const SearchBar = (props) => {
    return <form>
        <div className={searchBarStyle.main_container}>
            <div className={searchBarStyle.searchBar_container}>
                {/* <Button style={Classes.btn_theme}>Sort by</Button> */}
                <Box>
                    <SearchIcon className={searchBarStyle.search_icon} /><input type="text" placeholder="Search recipes and more..." />
                </Box>
                {/* <FollowUs /> */}
            </div>
        </div>
    </form>
}
export default SearchBar;