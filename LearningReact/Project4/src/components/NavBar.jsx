import React from "react";
import Logo from "../../public/Images/logo.png";
export default function NavBar(){
    return(
        <div className="nav">
            <img src = {Logo} className="logo" />
            <h1 className="name">Meme Generator</h1>
            <h1 className="subname">React Learning</h1>
        </div>
    )
}