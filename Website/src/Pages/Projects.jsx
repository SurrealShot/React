import React from "react";
import Project from "../Components/Project.jsx";
import AllProj from "../Data/AllProjects.jsx";
import PT from "../Data/PT.jsx"
import EN  from "../Data/EN.jsx"

export default function Projects(props)
{
    let language = PT
    if (props.lang == "PT")
    {
        language = PT 

    }else if (props.lang == "EN")
    {
        language = EN

    }
    const allproj = props.lang === "EN" ? AllProj.EN.map(proj => <Project key = {proj.key} proj = {proj} mode = {props.mode}/>)
                                        : AllProj.PT.map(proj => <Project key = {proj.key} proj = {proj} mode = {props.mode}/>)

    return(
        <div className={"projects-" + props.mode}>
            <h1 className="projectsTitle">{language[2]}</h1>
            {allproj}
        </div>
    )
}