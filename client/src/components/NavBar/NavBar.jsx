import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePoke, getPokemones } from "../../redux/actions";
import "./NavBar.css";

export default function NavBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [isOpen , setIsOpen] = useState(false)

  function handleInputChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getNamePoke(name));
    
  }
  return (
    <div className="barraCaja">
      
      
      <div>
      <button className="button" onClick={() => setIsOpen(!isOpen)}>{!isOpen ? "🔎  " : " ❌ "}</button>
      <br />
      {isOpen && <input
        className="barra"
        type="text"
        
        placeholder  = "Search Pokemon..."
        onChange={(e) => handleInputChange(e)}
      />
      
      }
    </div>
    {/* <button className="button" onClick={() => setIsOpen(!isOpen)}>🔎 Search Pokemon</button> */}
      {isOpen && <button className="lupa" type="submit" onClick={(e) => handleSubmit(e)}>
        🔎
      </button>}

    </div>
  );
}
// 🔎
