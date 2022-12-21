import React from "react";
import Grid from "../../public/Images/grid.png"

export default function Header()
{
    return(
        <div className="header">
            <img src = {Grid} className = "grid"/>
            <h1 className="title">Online Experiences</h1>
            <p className="description">
                Unique Experiences brought to you by this react learning experience!
            </p>
        </div>
    )
}