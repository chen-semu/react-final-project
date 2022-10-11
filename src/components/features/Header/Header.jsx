import "./Header.css";
import React from "react";
import {Link} from "react-router-dom"
import Button from '@mui/material/Button';


function Header() {
  return (
    <div className="header">
      <Link to="/"><Button>Home</Button></Link>
    </div>
  );
};

export default Header;
