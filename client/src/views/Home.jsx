import React from "react";
import Cards from "../components/Cards";
import NavBar from "./NavBar"

import {Link } from "react-router-dom"



export default function Home(){
    return (
        <div >
            <br />
           <Link to="/create">
           <button>Crear pokemon</button>
           </Link>
            <h1>Pokemones</h1>
            <br />
            <NavBar/>
            <Cards/>
        </div>
    )
}



// style="display:flex; flex-wrap: wrap"