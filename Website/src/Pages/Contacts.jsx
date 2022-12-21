import React from "react";
import PT from "../Data/PT.jsx"
import EN  from "../Data/EN.jsx"


export default function Contacts(props)
{
    let language = PT
    if (props.lang == "PT")
    {
        language = PT 
    }else if (props.lang == "EN")
    {
        language = EN
    }


    return(
        <div className={"contacts-" + props.mode}>
            <h1 className="contactsTitle">{language[1]}</h1>
            <div className="contact">
                <h1>Email:</h1>
                <p>luiscgsqueiros@gmail.com</p>
            </div>
            <div className="contact">
                <h1>{language[11] + ":"}</h1>
                <p>(+351)927494789</p>
            </div>
            <div className="contact">
                <h1>LinkedIn:</h1>
                <p>https://www.linkedin.com/in/luis-queiros-2553b4254/</p>
            </div>
        </div>
    )
}