import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePoke, getPokemones } from "../../redux/actions";
import "./NavBar.css";

export default function NavBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getNamePoke(name));
    
  }
  return (
    <div className="barraCaja">
      <input
        className="barra"
        type="text"
        placeholder="Buscar Pokemon..."
        onChange={(e) => handleInputChange(e)}
      />

      <button className="button" type="submit" onClick={(e) => handleSubmit(e)}>
        🔎
      </button>
    </div>
  );
}
// 🔎
