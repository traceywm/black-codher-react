import React from "react";
import { Link } from 'react-router-dom';

const Header= () => {
    return(
        <div>
            <h1>My Bookcase</h1>
            <Link to="/" className= "purple-button">Home</Link>
            <Link to="/bookcase"className="purple-button">Bookcase</Link>
            <Link to="/About"className="purple-button">About</Link>
        </div>
    )
}

export default Header;