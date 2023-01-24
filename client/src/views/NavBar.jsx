import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePoke } from "../redux/actions";
import "./NavBar.css"
import { Link } from "react-router-dom";

export default function NavBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        dispatch(getNamePoke(name))

    }
    return (
        <div className="barraCaja">
          <input
            className="barra"
            type="text"
            placeholder="Buscar Pokemon..."
            onChange={(e) => handleInputChange(e)}
          />
          <br />
          <button type="submit" onClick={(e) => handleSubmit(e)}>
          <Link to={`/details/${name}`}>
            BUSCAR
          </Link>
          </button>
        </div>
      );
    }
