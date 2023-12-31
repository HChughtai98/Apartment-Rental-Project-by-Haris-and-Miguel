import React from "react";
import "/src/styles/Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="SidebarContainer">
      <div className="SidebarDiv">
        <br />
        <Link to={'/'}>
          <p>Home</p>
        </Link>      
        <br />
        <Link to={'/favourites'}>
          <p>Favourites</p>
        </Link>
        <br />
        <Link to={'/about'}>
          <p>About Us</p> 
        </Link>  
      </div>
    </div>
  );
};

export default Sidebar;
