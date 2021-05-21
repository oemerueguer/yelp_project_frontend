import "./restaurant.css";
import Axios from "axios";
import {useState, useEffect} from "react";
import React from "react";
import { Container, Row, Col } from "reactstrap";
import RestaurantPicture from "../images/yelp.png";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Footer from './footer';
const url = "https://yelp-backend546.herokuapp.com/restaurants"
const Restaurants = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    setLoader(true);
    await Axios.get(url)
    .then((response) => setData(response.data))
    .catch((error) => console.log(error));
    setLoader(false)
  }
  console.log(data)
  return (
    <>
      {loader ? "loading!" :  
          <div className="cardFlex">   
             <div className="restInfo">             
              {data.map((e, index) => (
                <>
                 <div className="insideCard">
                  <h3>{e.name}</h3>
                  <p>{e.city_id.name}</p>
                  <p className="desc">{e.description}</p>
                  <p>Tags: {e.tag_id[0].name}</p>
                  <p> Stars : {e.stars}</p>
                  <button className="btnMore">More</button>
                 </div>
                </>
                
              ))}
            </div>
            <div className="footerMenu">
              <Footer />
              </div>
          </div>     
    }   
    </>
  );
};

export default Restaurants;
