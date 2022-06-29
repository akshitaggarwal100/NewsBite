import Search from "./Search";
import Topics from "./Topics";
import './header.css'
import { useState } from 'react';

function Header(props) {
    function handleSearchChange(args) {
        props.handleSearch(args);
    }

    function handleTopic(topic) {
        props.handleTopic(topic);
    }

    function handleSearch(keyword) {
        props.handleKeyword(keyword);
    }

    const [menu, setMenu] = useState(window.screenWidth < 700 ? false : true);

    function showMenu() {
        setMenu(menu ? false : true)
    }


    return (
        <nav className="navbar">
            <Search showMenu={showMenu} keyword={props.keyword} handleKeyword={handleSearch} handleSearchChange={handleSearchChange} />
            <Topics handleTopic={handleTopic} menu={menu} topic={props.topic} />
        </nav>
    )
}

export default Header;