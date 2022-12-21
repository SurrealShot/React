import React from "react";

export default function Tech(props)
{
    return(
        <div className={"tech-"+ props.mode}>
            <h1 className= "techText1">{props.name}</h1>
            <h2 className= "techText2">{props.source}</h2>
        </div>
    )
}