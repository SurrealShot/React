import React from "react";
import Header from "./Components/Header.jsx"
import Navbar from "./Components/Navbar.jsx"
import CardList from "./Components/CardList.jsx";

export default function App()
{

    //<Header/>
    return (
        <div>
            <Navbar/>
            <Header/>
            <CardList/>
        </div>
    )
}