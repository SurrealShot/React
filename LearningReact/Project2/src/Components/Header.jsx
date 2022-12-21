import React from "react";
import PIC from "../Images/pic.png"
import Email from "../Images/email.png"
import LinkedIn from "../Images/linkedin.png"

export default function Header()
{
    return(
        <div className="header">
            <img src = {PIC} className="pic"/>
            <h1 className="name">Luís Queirós</h1>
            <h2 className="ocupation">Software Developer</h2>
            <h2 className="website">Website</h2>
            <div className="butons">
                <div className="email">
                    <img src={Email} />
                </div>
                <div className="linkedin">
                    <img src={LinkedIn} />
                </div>
            </div>
        </div>
    )
}