// Carta individual 
// Nombre , img y tipo

import React from "react";
import "./Card.css"

export default function Card({name, img, types}) {
    return(
        <div className="cardPoke">
            <div>
                <h4>{name}</h4>
            </div>
                <div className="imgCard">
                <img src = {img} alt= "flag"/>
            </div>
            <div>
                <h4>Tipo:</h4>
                <h4>{types?.map(e=> <span>{e + " "}</span> )}</h4>
            </div>
            
        </div>
    )
}
// style={{display :"flex", height: "200px"}