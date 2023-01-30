import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail, deletePokemon, getPokemones } from "../../redux/actions";
import { useHistory } from "react-router-dom";

import "./Details.css"


export default function Details(props) {
  const dispatch = useDispatch();

  const {id} = useParams()

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  const pokemon = useSelector((state) => state.detail);

  const history = useHistory()


  const handlerDelete = () => {
    dispatch(deletePokemon(id));
    alert("Pokemon eliminado con Éxito!");
    history.push("/home");
    dispatch(getPokemones());
  };

  return (
    <div  id={'contenedor'}>
      <div className="title1">
      <br/>
        <h1>Pokemon Card</h1>
        
      </div>
      <br />
      <div>
        {pokemon.length > 0 ? (
          
          <h2 style={{color:"white"}}>{pokemon[0].name.toUpperCase()}</h2>
          ) : (
            <img src="https://media.baamboozle.com/uploads/images/125978/1629738053_29014_gif-url.gif" alt="imagen"/>
          )}
      </div>

      <div className="container">
      <Link to="/home">
          <button className="btnBack">Volver Atras</button>
        </Link>
      <button onClick={(e) => handlerDelete(e)}className="btnEliminar">Eliminar </button>
     
        {pokemon.length > 0 ? (
          <div lassName="card">
            <h2>IDº {pokemon[0].id}</h2>
          {pokemon[0].img? 
            <img  className="img" src={pokemon[0].img} alt="No se pudo cargar la imagen" /> :  
            
            <img className="img" src={"https://cdn.memegenerator.es/descargar/31466993"} alt="no hay imagen"/>
          }    
          
            <h2 className="boxTypes" >Type: {" " + pokemon[0].types + " "}</h2>
            <p className="boxContainer" >
              <div>
                <h3>Attack: {pokemon[0].attack}</h3>
                <h3>Defense: {pokemon[0].defense}</h3>
                <h3>Speed: {pokemon[0].speed}</h3>
              </div>
              <div className="box2">
                <h3>Hp: {pokemon[0].hp}</h3>
                <h3>Weight: {pokemon[0].weight}</h3>
                <h3>Height: {pokemon[0].height}</h3>
              </div>
            </p>
          </div>
        ):<h4>Espera un segundo... </h4>}
        
        
           
                    

      </div>
    </div>
  );
}
