import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <div style={{background:"#333",padding:"10px"}}>

      <Link to="/" style={{color:"white",marginRight:"20px"}}>Home</Link>

      <Link to="/upload" style={{color:"white",marginRight:"20px"}}>
        Customize Photo
      </Link>

      <Link to="/support" style={{color:"white"}}>
        Customer Support
      </Link>

    </div>
  );
}

export default Navbar;