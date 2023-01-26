import React from "react";
import { Link } from "react-router-dom";
import style from './Landing.module.css'



export default function Landing(){
    return(
        
        <div className={`${style.div}`}>
            <h1 className={`${style.pokeTit}`}>Bienvenidos a</h1>
            
            <Link to={'/home'}> 
            <button className={`${style.pokeButton}`} role="button">
                <span class='text'>Empieza ahora!</span>
                </button></Link>
        </div>

      )
}