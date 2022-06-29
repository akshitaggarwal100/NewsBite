import './header.css';
import { FaSearch } from 'react-icons/fa';
import { CgClose, CgMenu } from 'react-icons/cg';
import { useState } from 'react';
import { BiCookie } from 'react-icons/bi';

function Search(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.handleSearchChange({ search: e.target.search.value, country: e.target.country.value });
  }

  function handleChange(e) {
    props.handleKeyword(e.target.value);
  }

  const [showSearch, setShowSearch] = useState(window.screenWidth < 700 ? false : true);

  return (
    <form className="search" onSubmit={handleSubmit}>

      <div className='logo'>
        <BiCookie className='logoMark' />
        <div className='logoTitle'>
          <h1>News Bite</h1>
          <h2>By Akshit Aggarwal</h2>
        </div>
      </div>

      <button onClick={() => props.showMenu()} className='menuButton'>
        <CgMenu className='menuIcon' />
      </button>

      <button onClick={() => setShowSearch(true)} className={showSearch ? 'disable' : 'Button'}>
        <FaSearch className='searchIcon' />
      </button>

      <button onClick={() => setShowSearch(false)} className={showSearch ? 'Button' : 'disable'}>
        <CgClose className='searchIcon' />
      </button>

      <div className={showSearch ? 'searchBar' : 'disable'} >
        <input className='input' type="text" value={props.keyword} onChange={handleChange} name='search' placeholder="Search..." />
        <button className='btn'>
          <FaSearch className='icon' />
        </button>
      </div>

      <div className='country'>
        <select className='country' name="country" >
          <option value="in">India</option>
          <option value="de">Germany</option>
          <option value="fr">France</option>
          <option value="au">Austarlia</option>
          <option value="hk">Hong Kong</option>
          <option value="tw">Taiwan</option>
          <option value="ro">Romania</option>
          <option value="ae">United Arab Emirates</option>
          <option value="us">United States</option>
          <option value="gb">United Kingdom</option>
        </select>
      </div>

    </form>
    // </div>
  )
}

export default Search;