import React from "react";
import { Link } from "react-router-dom";
import'./Loading.css'
import '../Home/Home.css'

export default function Loading () {
    return (
        <div id={"home"}>
        <div className="loading">
            <img  src="https://media.baamboozle.com/uploads/images/125978/1629738053_29014_gif-url.gif" alt="" />
            <Link to="/home">
        <div className="">
          <button className="reload-button" onClick={"location.reload()"}>
            <i className="fas fa-sync-alt">Volver</i>
          </button>
        </div>
      </Link>
        </div>
        </div>
    )
}