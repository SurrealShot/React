import React from "react";
import { useEffect } from "react";
import NavBar from "./Components/NavBar";
import Home from './Pages/Home';
import Contacts from './Pages/Contacts';
import Projects from './Pages/Projects';

export default function App()
{
    const [mode, setMode] = React.useState("darkMode")
    const [page, setPage] = React.useState("Home")
    const [lang, setLang] = React.useState("EN")

    
    
    function changeLang(selector)
    {
        setLang(selector.target.value)
    }
    function changeMode()
    {
        setMode(prev => prev === "darkMode" ? "lightMode" : "darkMode")
        localStorage.setItem("Mode",mode)
        
    }
    function changePage(p)
    {
        setPage(p)
    }

    return(
        <div>
            <NavBar mode = {mode} setMode = {changeMode} changePage = {changePage} lang = {lang} changeLang = {changeLang}/>
            {page === "Home" && <Home lang = {lang} mode = {mode} /> }
            {page === "Contacts" && <Contacts lang = {lang} mode = {mode}/> }
            {page === "Projects" && <Projects lang = {lang} mode = {mode}/> }
        </div>
    )
}