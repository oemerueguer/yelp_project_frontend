import "./header.css";
import mainlogo from "../images/yelp.png";
import NavigationBar from "./navbar";
import { useState, useEffect } from "react";
import Axios from "axios";
import Footer from "./footer";

const headerPictures = [
  "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/3780032cdbe6/assets/img/home/hero_photos/TaW5o-S7q8-QYkLTWtRYFw.jpg",
  "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/eea3522f4348/assets/img/home/hero_photos/BWRT755ImlKnGpjV4udRdQ.jpg",
  "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/03aa48ca7ef1/assets/img/home/hero_photos/M0iX_vhAdaC9m2ew5TrQtA.jpg",
  "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/469f5b12df16/assets/img/home/hero_photos/ubaw1eG3Pf4qCmKx-pkC4g.jpg",
  "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/7822ae13199f/assets/img/home/hero_photos/9pnLHoZnwY067nbjHNPnfQ.jpg",
  "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/fa8d73b85ad8/assets/img/home/hero_photos/J4bBEXXBIHmYLl50X1l72g.jpg",
  "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/79a94a561607/assets/img/home/hero_photos/OknYaBuZZ6nD_ps2BAPGCQ.jpg",
  "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/dde93fe399aa/assets/img/home/hero_photos/Xs7es0q4jmFY5CV3uTeuPw.jpg",
  "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/1629eec0e96d/assets/img/home/hero_photos/3oz4uflrjm1Uftg_R689PA.jpg",
  "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/884c12b285fc/assets/img/home/hero_photos/TdClV4QlpucjFX4GdPc2QQ.jpg",
  "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/e456d8b923f5/assets/img/home/hero_photos/DLIUyjgS7v50YRV2xfNquA.jpg",
  "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/6259bbd502d7/assets/img/home/hero_photos/lfNjhsMKDzqKndhTcb_Xfw.jpg"
];

const Header = () => {
  const [yelpPicture, setYelpPicture] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [cityName, setCityName] = useState("");

  useEffect(() => {
    setYelpPicture(headerPictures[Math.floor(Math.random() * headerPictures.length)]);
  }, []);
  console.log(restaurantName)
  console.log(cityName)

  useEffect(() => {
    fetchCities();
  })

  const fetchCities = async() => {
    await Axios.get(`https://yelp-backend546.herokuapp.com/cities`)
    .then((response) => setCityName(response.data))
    .catch((error) => console.log(error)); 
  }

  return (
    <>
      <div className="Header" style={{backgroundImage: `url(${yelpPicture})`}}>
        <div>
          <NavigationBar />
          <div className="Header_inside">
            <a href={`/header`}>
              <img src={mainlogo} />
            </a>
            {/* Search bar goes here !!! */}
            <div className="searchBar">
              <button className="btn1" href={`/restaurants/${restaurantName}`}>
                Find
              </button>
              <input
                type="text"
                className="inputOne"
                placeholder="Restaurants"
                onChange={(e) => setRestaurantName(e.target.value)}
              />
            
              <button id="bbt"  className="btn2" href={`/header/${cityName}`}>
                Where
              </button>
              <input
                type="text"
                className="inputTwo"
                placeholder="Berlin"
                onChange={(e) => setCityName(e.target.value)}
              />

              <button  className="btn3">
                <i onClick={e => e.preventDefault()} className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
