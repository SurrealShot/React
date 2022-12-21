import React from 'react'
import Logo from "../Images/logo.png"

export default function Navbar()
{
    return(
        <div className='Nav'>
            <div className='NavL'>
            <img src = {Logo}/>
            <h1>
                ReactFacts
            </h1>
            </div>
            <h2 className='NavR'>
                Learning React
            </h2>
        </div>
    )
}