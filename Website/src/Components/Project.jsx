import React from "react";

export default function Project(props)
{
    return (
    <div className={"project-" + props.mode}>
        <img className="projectImage" src={props.proj.img} />
        <div className="projectDescription">
            <h1>{props.proj.name}</h1>
            <p>{props.proj.description}</p>
            <h3>{props.proj.technologies}</h3>
            <a href={props.proj.link1}>{props.proj.link1Name}</a>
            <a href={props.proj.link2}>{props.proj.link2Name}</a>
        </div>
    </div>
    )
}
