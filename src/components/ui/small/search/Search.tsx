import React from 'react'
import { FaSearch } from "react-icons/fa";
import style from "./Search.module.scss"
const Search = () => {
    return (
        <div className={style.container}>
            <FaSearch className={style.search_icon} />
            <input type="text" placeholder="What do you want to play?" />
        </div>
    )
}

export default Search;