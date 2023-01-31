import React from "react";
import { Link } from "react-router-dom";
import'./Loading.css'
import '../Home/Home.css'

export default function Loading () {
    return (
        <div id={"home"}>
        <div className="loading">
            <img  src="https://media.baamboozle.com/uploads/images/125978/1629738053_29014_gif-url.gif" alt="" />
            <p style={{color:"white"}}>Espera un segundo ...</p>
            
        </div>
        </div>
    )
}