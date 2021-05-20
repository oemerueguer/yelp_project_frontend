import "./header.css";
import mainlogo from "../images/yelp.png";
import NavigationBar from "./navbar";

const Header = () => {
   return (
       <>
       
        <div  className="Header">
        <NavigationBar/>
        {/*     <img id="logo" src={mainlogo} /> */}
        </div>
       </>
   )}

export default Header;