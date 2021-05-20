import React, { useState } from 'react';
import "./searchBar.css";

const SearchBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const searchBar = () => setIsOpen(!isOpen);
  
    return (
      <>
        <div>

        <button>Find</button>
        <input type = "text" placeholder="find restaurants here..."></input>
        <button>Where</button>
        <input type = "text" placeholder="Berlin"></input>

        </div>
      </>
    );
  }


export default SearchBar;