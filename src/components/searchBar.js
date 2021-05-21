import React, { useState } from "react";
import "./searchBar.css";

const SearchBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const searchBar = () => setIsOpen(!isOpen);

  return (
    <>
      <div>
 
        <button>Find</button>
        <input type="text" placeholder="find restaurants here..." />

        <button href={`/header/${cityName}`}>Where</button>
        <input type="text" placeholder="Berlin" className="mr-sm-2" onChange={(e) => setCityName(e.target.value)} />
      </div>
    </>
  );
};

export default SearchBar;
