import React, { useEffect } from "react"; // SIMULA LOS ESTADOS DE VIDA DEL COMPONENTE
import { useSelector, useDispatch } from "react-redux"; //HOOK. SELECCIONA DESDE NUESTRO STORE UNO DE LOS ESTADOS
import Card from "./Card";
import { Link } from "react-router-dom";
import { getPokemones } from "../redux/actions";


export default function Cards() {
  //pedido de estado de redux
  let statePoke = useSelector((state) => state.pokemones);
    console.log(statePoke);
  const dispatch = useDispatch();
  // se despacha
  useEffect(() => {
    dispatch(getPokemones());
  }, [dispatch]);

  return (
    <>
      <div style={{display: "flex", flexWrap: "wrap", justifyContent:"space-between"}}>
        {statePoke.length > 0 ? (
          statePoke.map((p) => 
          
          <Link key ={p.id} to={`/details/${p.id}`}>
          <Card name={p.name} img ={p.img} types={p.types}/> <br/>
          </Link>
          )) : (
         <h2>Cargando...</h2>
        )}
      </div>
    </>
  );
}
