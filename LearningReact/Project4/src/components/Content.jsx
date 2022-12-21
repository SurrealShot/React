import React from "react";


export default function Content(){

    const [allMemes, setAllMemes] =  React.useState()
    const [meme,setMeme] = React.useState({img:"http://i.imgflip.com/1bij.jpg",top:"",bot:""})

    React.useEffect(function()
    {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        setMeme(prev =>{
            return { 
                ...prev,
                img : allMemes[randomNumber].url    
            }
    })
    }
    function handleChange(event)
    {
        const {name , value} = event.target
        setMeme(prev => {
            return {
                    ...prev,
                    [name] : value
                    
                }
        })    
    }

    return(
        <div className="content">
            <form>
                <div className="textentry">
                    <textarea value={meme.top} onChange={handleChange} name = "top" placeholder={"Top Text"}></textarea>
                    <textarea value={meme.bot} onChange={handleChange} name = "bot" placeholder={"Bottom Text"}></textarea>
                </div>
            </form>
            <button onClick={getMemeImage} className="button">Generate new meme</button>
            <div className="meme">
                <img className="memeImg" src = {meme.img}/>
                <h2 className="memeTextTop">{meme.top}</h2>
                <h2 className="memeTextBottom">{meme.bot}</h2>
            </div>

        </div>
    )
}