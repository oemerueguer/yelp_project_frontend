import "./header.css";
import mainlogo from "../images/yelp.png";
import NavigationBar from "./navbar";

const Header = () => {
   return (
       <>
        <div  className="Header">
         <div>
             <NavigationBar/>
           <div className="Header_inside">
            <img src={mainlogo} /> 
             {/* Search bar goes here !!! */}
            <div className="searchBar">
                <button className="btn1">Find</button>
                <input className="inputOne" placeholder="Restaurants" />
                <button className="btn2">Where</button>
                <input className="inputTwo" placeholder="Berlin" />
                <button className="btn3"><i class="fas fa-search"></i></button>
            </div>
           </div>
        </div>
        </div>
       </>
   )}

export default Header;