import React from "react";
import "../NavBar/NavBar.css";
import { Link } from "react-router-dom";


const NavBar = () => {
    return ( 
        <div className="navbar">
            <ul>
                <Link to="/one"><li >One</li></Link>
                <Link to="/two"><li >Two</li></Link>
                <Link to="/three"><li >Three</li></Link>
                <Link to="/four"><li >Four</li></Link>
                <Link to="/five"><li >Five</li></Link>




               
            </ul>
        </div>
     );
}
 
export default NavBar;