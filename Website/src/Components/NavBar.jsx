import React from "react";
import PT from "../Data/PT.jsx"
import EN  from "../Data/EN.jsx"

export default function NavBar(props)
{
    let language = PT
    if (props.lang == "PT")
    {
        language = PT 
    }else if (props.lang == "EN")
    {
        language = EN
    }
    
    return (
    <div className={"nav-" + props.mode}>
        <h1 className={"title-" + props.mode} >Luís Queirós</h1>
        <div className="tabs">
                <h1 onClick={() => props.changePage("Home")} className={"tabsLink-" + props.mode} >{language[0]}</h1>    
                <h1 onClick={() => props.changePage("Projects")} className={"tabsLink-" + props.mode} >{language[2]}</h1>
                <h1 onClick={() => props.changePage("Contacts")} className={"tabsLink-" + props.mode} >{language[1]}</h1> 
        </div>
        <div className="toggle">
                <p className={"toggletext-" + props.mode}>{language[3]}</p>
                <div  className={"toggleSlider-"+ props.mode } onClick={props.setMode}>
                    <div className={"toggleCircle-"+ props.mode}></div>
                </div>
                <p className={"toggletext-" + props.mode}>{language[4]}</p>
        </div>
        <select value={props.lang} onChange={props.changeLang} className="languageSelect" id="lang">
                <option value="PT">PT</option>
                <option value="EN">EN</option>
        </select>
        <img className="flag" src={"../Images/" + props.lang +".png"}/>
    </div>
    )
}