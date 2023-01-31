import React, { useEffect, useState } from "react"; // SIMULA LOS ESTADOS DE VIDA DEL COMPONENTE
import { useSelector, useDispatch } from "react-redux"; //HOOK. SELECCIONA DESDE NUESTRO STORE UNO DE LOS ESTADOS
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { getPokemones } from "../../redux/actions";
import "./Cards.css";
import Loading from "../Loading/Loading";
import Paginado from "../Paginado/Paginado";
import Error from "../Error/Error"

export default function Cards() {
  let statePoke = useSelector((state) => state.pokemones);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  console.log(statePoke);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    dispatch(getPokemones());
  }, [dispatch]);

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
        {loading ? (
          <div>
            <div>
              <Loading />
             
            </div>
          </div>
        ) : !currentPokes.length ? <Error/> :(
          currentPokes.map((p) => (
            <Link className="cardDetail" key={p.id} to={`/details/${p.id}`}>
              <Card name={p.name} img={p.img} types={p.types} />
            </Link>
          ))
        )}
      </div>
    </>
  );
}


