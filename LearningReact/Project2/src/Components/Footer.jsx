import React from "react";
import Twitter from "../Images/twitter.png"
import LinkedInSmall from "../Images/linkedinsmall.png"
import Facebook from "../Images/facebook.png"

export default function Footer()
{
    return(
        
        <div className="footer">
            <img src={Facebook}/>
            <img src={Twitter}/>
            <img src={LinkedInSmall}/>
        </div>
    )
}