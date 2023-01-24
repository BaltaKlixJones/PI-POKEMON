import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail } from "../redux/actions";
import "./Details.css"

export default function Details(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  const pokemon = useSelector((state) => state.detail);

  return (
    <>
      <div className="title1">
      <br/>
        <h1>Pokemon Card</h1>
        <br/>
      </div>
      <div>
        {pokemon.length > 0 ? (
          <h2>{pokemon[0].name.toUpperCase()}</h2>
        ) : (
          <h2>Cargando...</h2>
        )}
      </div>

      <div className="container">
        {pokemon.length > 0 ? (
          <div lassName="card">
            <img  className="img" src={pokemon[0].img} alt="pokemonimg" />
            <h2 className="boxTypes" >Tipo: {" " + pokemon[0].types + " "}</h2>
            <p className="boxContainer" >
              <div>
                <h3>Fuerza: {pokemon[0].attack}</h3>
                <h3>Defensa: {pokemon[0].defense}</h3>
                <h3>Velocidad: {pokemon[0].speed}</h3>
              </div>
              <div className="box2">
                <h3>Vida: {pokemon[0].hp}</h3>
                <h3>Peso: {pokemon[0].weight}</h3>
                <h3>Altura: {pokemon[0].height}</h3>
              </div>
            </p>
          </div>
        ) : (
          <h2>Cargando...</h2>
        )}
        <Link to="/">
          <button>Volver Atras</button>
        </Link>
      </div>
    </>
  );
}
