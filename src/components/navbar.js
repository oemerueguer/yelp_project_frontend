import React, { useState } from 'react';
import "./navbar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const NavigationBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div>
      <Navbar  className="navMobile" color="dark" light expand="md">
{/*        <NavbarBrand href="/">Yelp!</NavbarBrand>} */}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="hoverEffect">
              <NavLink className="colored" href="/components/">Write a Comment</NavLink>
            </NavItem>
            <NavItem className="hoverEffect">
              <NavLink className="colored" href="https://github.com/reactstrap/reactstrap">Events</NavLink>
            </NavItem>
            <NavItem className="hoverEffect">
              <NavLink className="colored" href="https://github.com/reactstrap/reactstrap">Forum</NavLink>
            </NavItem>            
          </Nav>
          <NavbarText className="sign colored hoverEffect">Sign In</NavbarText>
          <NavbarText className="register">Register</NavbarText>
        </Collapse>
      </Navbar>
    </div>
    </>
  );
}

export default NavigationBar;