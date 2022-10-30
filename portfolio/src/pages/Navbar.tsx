import React from "react";
import { Link, useLocation } from "react-router-dom";


function Navbar() {
   const location  = useLocation()
   const {pathname} = location;
 
   const routeName = pathname.split("/")[1]
  return (
    <div className="navbar-top border">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className= {routeName === "" ? "nav-link active" :"nav-link" } to="/">
           About me
          </Link>
        </li>
        <li className="nav-item">
        <Link className= {routeName === "portfolio" ? "nav-link active" :"nav-link" } to="/portfolio">
           Portfolio
          </Link>
        </li>
        <li className="nav-item">
        <Link className= {routeName === "experiences" ? "nav-link active" :"nav-link" } to="/experiences">
           Experience
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
