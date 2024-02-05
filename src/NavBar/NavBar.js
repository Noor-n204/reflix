import './NavBar.css';
import * as React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
        <Link to="/" className="home">Home</Link>
        <Link to="/catalog" className="catalog">Catalog</Link>
        <Link to='/' className="reflix">REFLIX</Link>
    </div>
  );
}


export default NavBar;
