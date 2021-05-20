import "./restaurant.css";
import Axios from "axios";
import React from "react";
import { Container, Row, Col } from "reactstrap";
import RestaurantPicture from "../images/yelp.png";


const Restaurants = () => {
  return (
    <>
      <Container className="restaurantPage">
        <Row>
          <Col xs="6" sm="8">
          <div className="cardFlex">   
             <img className="restPic" src={RestaurantPicture}/>
             <div className="restInfo"> 
             <h2>Pizzeria Name</h2>
             <p>Rating comes here</p>
             <p>Euro sign - FoodName and NationName</p>
            </div>
          </div>  
          </Col>
          <Col xs="6" sm="4">
            .col-6 .col-sm-4
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Restaurants;
