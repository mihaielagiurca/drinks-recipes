import React, {useState} from "react"
import {Link} from "react-router-dom"
import '../index.css';
function Navbar(){
   const [menuOpen, setMenuOpen] = useState(false)
    return(
        <>
        <nav className="navbar" role="navigation">
            <div className="navbar-left">
                <Link to="/" className="logo">Cocktails</Link>
            </div>
            <div className="navbar-right">
                <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                        <li>
                            <Link to="/old-fashioned">Explore Old Fashioned Cocktails</Link>
                        </li>
                        <li>
                            <Link to="/martini">Discover The Martini</Link>
                        </li>
                        <li>
                            <Link to="/margarita">Taste The Margarita</Link>
                        </li>
                   
                </ul>
                <div className="hamburger-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    &#9776; {/* This is the hamburger icon */}
                </div>
            </div> 
        </nav>
        </>
    )
}
export default Navbar;