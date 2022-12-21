import React from "react";
import Logo from "../../public/Images/logo.png"

export default function Navbar()
{
    return(
        <div className="nav">
            <img src = {Logo} className = "logo" />
        </div>
    )
}