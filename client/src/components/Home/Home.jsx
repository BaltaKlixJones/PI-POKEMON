import React from "react";
import Cards from "../Cards/Cards";
import NavBar from "../NavBar/NavBar";
import {
  getPokemones,
  filterPokemonesbyType,
  orderA_Z,
  getTypes,
  creApiFilt,
  filterAttack,
  
} from "../../redux/actions";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "./Home.css";
import Error from "../Error/Error"
import AboutMe from "../About/About";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const allTypes = useSelector((state) => state.types); // extraigo los datos del store utilizando una funcion selectora (useSelector)

  useEffect(() => {
    dispatch(getPokemones());
  }, [dispatch]);

  function handleOrderAZ(e) {
    dispatch(orderA_Z(e.target.value));
  }
  function handleCreApi(e) {
    dispatch(creApiFilt(e.target.value));
  }

 


  function handleTypesFilt(e) {
    e.preventDefault();
    dispatch(filterPokemonesbyType(e.target.value));
  }


  function hanldeAttack(e) {
    dispatch(filterAttack(e.target.value));
  }

  return (
    <div id={"home"}>
      
      <br />
      <Link to="/create">
        <div className="btnCrearhome">
          <h5>Create Pokemon</h5>
        </div>
      </Link>
      <Link to="/home">
        <div className="containerRecarga">
          <button className="reload-button" onClick={"location.reload()"}>
            <i className="fas fa-sync-alt">Home</i>
          </button>
        </div>
      </Link>
      
        
      
      <h3 className="textFilter">Filter By:</h3>
      <div className="filtrar">
        <select className="btnOrdenar" onChange={(e) => handleOrderAZ(e)}>
          <option value={"All"}>ALFABET </option>
          <option value={"asc"}>A-Z</option>
          <option value={"desc"}>Z-A</option>
        </select>


        <select className="btnCreados" onChange={(e) => handleCreApi(e)}>
          <option value={"allPoke"}>ALL</option>
          <option value={"apiPoke"}>API</option>
          <option value={"dbPoke"}>Created</option>
        </select>

        <select className="btnTipos" onChange={(e) => handleTypesFilt(e)}>
          {" "}
          <option value={"All"}>Types</option>
          {allTypes?.map((curr) => {
            return <option value={curr.type}>{curr.type + " "}</option>;
          })}
        </select>

        <select className="btnTipos" onChange={(e) => hanldeAttack(e)}>
          <option value="All">ATTACK</option>
          <option value="descA">ATTACK + TO -</option>
          <option value="ascA">ATTACK - TO +</option>
        </select>

        
      </div>
      
      <div id={"home"}>
      <AboutMe/>
        <h1 className="pokemon-title">🔥 Pokemons 🔥</h1>
        <NavBar />
        

        {<Cards /> ? <Cards /> : <Error/>}
      </div>
    </div>
  );
}

// style="display:flex; flex-wrap: wrap"
