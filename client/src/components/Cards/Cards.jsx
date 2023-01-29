import React, { useEffect, useState } from "react"; // SIMULA LOS ESTADOS DE VIDA DEL COMPONENTE
import { useSelector, useDispatch } from "react-redux"; //HOOK. SELECCIONA DESDE NUESTRO STORE UNO DE LOS ESTADOS
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { getPokemones } from "../../redux/actions";
import "./Cards.css";
import Loading from "../Loading/Loading";
import Paginado from "../Paginado/Paginado";



export default function Cards() {
 
  let statePoke = useSelector((state) => state.pokemones);

  

  console.log(statePoke);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemones());
  }, [dispatch]);

  // const handleDelete = (e) => {
  //   const card = [...statePoke]
  //   card.splice(e.statePoke)
  // }
 

  const [currentPage, setCurrentPage] = useState(1);
  const [pokesPerPage, setPokesPerPage] = useState(15);

  const indexOfLastPokes = currentPage * pokesPerPage; //15
  const indexOfFirstPoke = indexOfLastPokes - pokesPerPage; //0
  const currentPokes = statePoke.slice(indexOfFirstPoke, indexOfLastPokes);
  
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <>
      
      <Paginado
      currentPage={currentPage}
        pokesPerPage={pokesPerPage}
        allPokemones={statePoke.length}
        paginado={paginado}
      />
       <br />

      <div className="cards">
        {
        !currentPokes.length  ? (
              <div >
              <div >
              <Loading/>
              </div>
              </div>
          ) : ( 
            currentPokes.map((p) => (
             
                 <Link className="cardDetail" key={p.id} to={`/details/${p.id}`}>
                   {<Card/> ? <Card  name={p.name} img={p.img} types={p.types} /> : <Loading/>}
                   <br />
                 </Link>
                
                  ))
               )
               
               }
      </div>
    </>
  );
}

// const handleDelete = () => {
//   dispatch(deletePokemon(id));
//   alert("Pokemon eliminado");
//   history.push("/home");
//   dispatch(getPokemones());
// };