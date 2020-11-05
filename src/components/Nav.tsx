import React from "react";
import {Link} from "react-router-dom"

function Nav() {
  const navStyle = {
    color: "white"
  };

  return (
    <nav>
      <h3>FCC Nashville ADS</h3>
      {/* <ul className="nav-links">
        <Link style={navStyle} to="/admin">
          <li>thing 1</li>
        </Link>
        <Link style={navStyle} to="/admin/group-participants">
          <li>thing 2</li>
        </Link>
        
      </ul> */}
    </nav>
  )
}

export default Nav;