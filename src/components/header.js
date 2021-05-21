import "./header.css";
import mainlogo from "../images/yelp.png";
import NavigationBar from "./navbar";
import { useState, useEffect } from "react";
import Axios from "axios";
import Footer from "./footer";

const Header = () => {
    const [headerPicture, setHeaderPicture] = useState();
    const [restaurantName, setRestaurantName] = useState('')
    const [cityName, setCityName] = useState('')

    useEffect(() => {
        fetchHeaderPicture();
    }, [])

    const fetchHeaderPicture = async () => {
       {/* const randomNumber = Math.floor(Math.random() * 5 + 1); */}
       await Axios.get("https://api.yelp.com/v3/businesses/")
          .then((response) =>
            console.log(response)
          )
          .catch((error) => console.log(error));
      }; 



      return (
        <>
         <div  className="Header" style={{backgroundImage:{}}}>
          <div>
              <NavigationBar/>
            <div className="Header_inside">
                <a href={`/header`}><img src={mainlogo} /></a>
              {/* Search bar goes here !!! */}
             <div className="searchBar">
                 <button className="btn1" href={`/restaurants/${restaurantName}`}>Find</button>
                 <input type="text" className="inputOne" placeholder="Restaurants" onchange={(e) => setRestaurantName(e.target.value)}/>
              
                 <button className="btn2" href={`/header/${cityName}`}>Where</button>
                 <input type="text" className="inputTwo" placeholder="Berlin" onchange={(e) => setCityName(e.target.value)}/>
  
                 <button className="btn3"><i class="fas fa-search"></i></button>
             </div>
            </div>
         </div>
         <Footer />
         </div>
        </>
    )}

 

export default Header;