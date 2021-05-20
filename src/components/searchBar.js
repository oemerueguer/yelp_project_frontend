import React, { useState } from "react";
import { Button, Nav, Form, Navbar, NavDropdown, FormControl } from 'react-bootstrap';
import "./searchBar.css";

const SearchBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const searchBar = () => setIsOpen(!isOpen);

  return (
    <>
      <div>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search Restaurant"
            className="mr-sm-2"
            onChange={(e) => setRestaurantName(e.target.value)}
          />
          <Button
            href={`/restaurant/${restaurantName}`}
            variant="outline-success"
          >
            Search Restaurant
          </Button>
        </Form>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search City"
            className="mr-sm-2"
            onChange={(e) => setCityName(e.target.value)}
          />
          <Button href={`/home/${cityName}`} variant="outline-success">
            Search City
          </Button>
        </Form>

        <button>Find</button>
        <input type="text" placeholder="find restaurants here..." />

        <button href={`/header/${cityName}`}>Where</button>
        <input type="text" placeholder="Berlin" className="mr-sm-2" onchange={(e) => setCityName(e.target.value)} />
      </div>
    </>
  );
};

export default SearchBar;
