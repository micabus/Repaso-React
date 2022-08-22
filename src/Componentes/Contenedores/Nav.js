import React from "react";
import { Link } from "react-router-dom";

export default function Nav(){
    return(
        <div className="container">
            <Link to="/favorites">
             <span>Favoritos</span>
            </Link>
            <Link to="/home">
             <span>Home</span>
            </Link>
        </div>
    )
}