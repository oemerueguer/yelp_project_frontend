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
      <Navbar className="navMobile"  light expand="md">
{/*        <NavbarBrand href="/">Yelp!</NavbarBrand>} */}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto NavDesign" navbar>
          <NavItem className="hoverEffect">
              <NavLink className="colored" href="/header">Home</NavLink>
            </NavItem>              
            <NavItem className="hoverEffect">
              <NavLink className="colored" href="#">Write a Comment</NavLink>
            </NavItem>
            <NavItem className="hoverEffect">
              <NavLink className="colored" href="#">Events</NavLink>
            </NavItem>
            <NavItem className="hoverEffect">
              <NavLink className="colored" href="#">Forum</NavLink>
            </NavItem>         
          </Nav>
          <NavbarText className="sign colored hoverEffect">Login</NavbarText>
          <NavbarText className="register">Register</NavbarText>
        </Collapse>
      </Navbar>
    </div>
    </>
  );
}

export default NavigationBar;