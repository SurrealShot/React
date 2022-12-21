import React from "react";
import Star from "../../public/Images/star.png";


export default function Card(props){
    

    return (

        <div className="card">
            {props.openspots === 0 && <div className="sold">Sold Out</div>}
            <img src = {props.img} className = "cardimage"/>
            <div className="reviews">
                <img src= {Star} className = "star" />
                <h1 className="rating">{props.rating}/5</h1>
                <h1 className="reviewnumber">{props.reviews} reviews</h1>
            </div>
            <h1 className="cardtitle">{props.title}</h1>
            <div className="costperperson">
                <h1 className="cost">{props.cost}€</h1>
                <h1 className="perperson">/Person</h1>
            </div>
        </div>
    )
}