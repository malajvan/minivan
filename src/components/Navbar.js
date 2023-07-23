import "./NavbarStyles.css";
import Pdf from '../Resources/Resume_HongVanPham.pdf'

import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className="header">
            <Link to="/minivan">
                <h1>Van Pham</h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/minivan">Hello</Link>
                </li>
                <li>    
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>    
                    <Link to="/music">Music</Link>
                </li>
                <li>
                    <a href={Pdf} target="_blank" rel="noreferrer">Resume</a>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? 
                (<FaTimes size={20} style ={{color: "#fff"}} /> ) :
                (
                <FaBars size={20} style ={{color: "#fff"}}/>)}
            </div>
        </div>
    );
};

export default Navbar;