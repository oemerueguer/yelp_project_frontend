import { Container, Row, Col } from "reactstrap";
import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <>
    <div className="footer">
       <Container>
        <Row>
          <Col xs="3" sm="3" className="hoverEffect" >About Us </Col>
          <Col xs="3" xm ="3" className="hoverEffect" >Contact Us</Col>
          <Col xs="3" sm="3" className="hoverEffect">Team</Col>
          <Col xs="3" xm ="3" className="hoverEffect">Forum</Col>    
        </Row>   
        <Row>
          <Col className="space copyright">Copyright by JAROSA</Col>     
        </Row>
        </Container>  
    </div>
    </>
  );
};

export default Footer;
