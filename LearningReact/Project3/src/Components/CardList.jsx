import React from "react";
import Card from "./Card";
import CardData from "../Data/Cards.jsx"

export default function CardList(){

    const CardElements = CardData.map(card =>{
        return  <Card   key = {card.id}
                        {...card}/>    
        })

    return(
        <div className="cardlist">
            {CardElements}
        </div>
    )
}