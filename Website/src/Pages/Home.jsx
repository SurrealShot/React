import React from "react";
import PT from "../Data/PT.jsx"
import EN  from "../Data/EN.jsx"
import Tech from "../Components/Tech.jsx";
import TechKnown from "../Data/TechKnown.jsx";

export default function Home(props)
{
    let language = PT
    if (props.lang == "PT")
    {
        language = PT 
    }else if (props.lang == "EN")
    {
        language = EN
    }

    const techcomps = TechKnown.map(tech => <Tech key = {tech.key} mode = {props.mode} name = {tech.name} source = {language[4 + tech.source] }/>)
    
        

    return(
        <div className={"home-"+ props.mode}>
            <h1 className="fullName">Luís Carlos Gomes de Sá Queirós</h1>
            <div className="presentation">
                <img  src= "../Images/Head.png" />
                <div className="presentationText">
                    <h1>{language[8]}</h1>
                    <p> {language[9]}</p>
                </div>
            </div>
            <div>
                <h1 className="techText">{language[10]}</h1>
                <div className="alltech">
                    {techcomps}
                </div>
            </div>
        </div>
    )
}