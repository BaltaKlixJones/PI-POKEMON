// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// // pegar al backend para que cree el pokemon en la base de datos
// // renderizar un form que permita ingresar  y gestionar los datos del usuario
// // todo de manera controlada (en el primer paso ya nos dice los errores y cuando lo entregamos lo entregamos sin errores)

// export default function Form() {

//     const mapToTypes = useSelector((state) => state.types);
//     const types = mapToTypes.map((e) => e.name);
//   // esto crea un objeto ----> le envio el objeto al servidor
//   const [pokemon, setPokemon] = useState({
//     name: "",
//     hp: "",
//     attack: "",
//     defense: "",
//     speed: "",
//     height: "",
//     weight: "",
//     img: "",
//     types: [],
//   });

//   const [errorButton, setErrorButton] = useState(true);

//   // funcion que maneja los cambios
//   function handleChange() {}
//   //funcion que maneja la entrega. No debe preocuparse por validar
//   function handleSumbit() {}
//   // funcion que maneja los types
//   function handleSelect(e) {
//     setPokemon({
//         ...pokemon,
//         types: [...pokemon.types, e.target.value],
//       });
//   }

//   function validate(data) {}

//   return (
//     <div>
//       <div>
//         <form onSubmit={handleSumbit}>
//           <div>
//             <label>Nombre</label>
//             <input
//               name="name"
//               value={pokemon.name}
//               onChange={handleChange}
//             ></input>
//             {/*-------------*/}
//             <label>Vida</label>
//             <input name="hp" value={pokemon.hp} onChange={handleChange}></input>
//             {/*-------------*/}
//             <label>Ataque</label>
//             <input
//               name="attack"
//               value={pokemon.attack}
//               onChange={handleChange}
//             ></input>
//             {/*-------------*/}
//             <label>Defensa</label>
//             <input
//               name="defense"
//               value={pokemon.defense}
//               onChange={handleChange}
//             ></input>
//             {/*-------------*/}
//             <label>Velocidad</label>
//             <input
//               name="speed"
//               value={pokemon.speed}
//               onChange={handleChange}
//             ></input>
//             {/*-------------*/}
//             <label>Altura</label>
//             <input
//               name="height"
//               value={pokemon.height}
//               onChange={handleChange}
//             ></input>
//             {/*-------------*/}
//             <label>Peso</label>
//             <input
//               name="weight"
//               value={pokemon.weight}
//               onChange={handleChange}
//             ></input>
//             {/*-------------*/}
//             <label>Imagen</label>
//             <input
//               name="img"
//               value={pokemon.img}
//               onChange={handleChange}
//             ></input>
//             {/*-------------*/}
//             <label>Tipo</label>
//             <select onChange={(e) => handleSelect(e)}>
//               {types.map((t) => (
//                 <option value={t}>{t}</option>
//               ))}
//             </select>

//             <p>
//               <p>{pokemon.types.map((el) => el + " ")}</p>
//             </p>
//             {/*-------------*/}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
// -------------------------------------------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------


import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
 import { postPokemon, getTypes } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";


export default function PokemonCreate() {
  const dispatch = useDispatch();
  const mapToTypes = useSelector((state) => state.types);
  const history = useHistory();
  const types = mapToTypes.map((e) => e.name);
  console.log("esto imprimo ==> ", types);

  const [input, setInput] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    img: "",
    types: [],
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSelect(e) {
    setInput({
      ...input,
      types: [...input.types, e.target.value],
    });
    console.log(input);
  }

  function handleSubmit(e) {
    //console.log(input);
    (e).preventDefault()
    if (!input.name) return alert("Debe colocar un nombre para poder seguir");
    else if (!input.hp || input.hp < 0) return alert("Debe colocar puntos de vida validos para seguir");
    else if (!input.attack || input.attack < 0) return alert("Debe colocar puntos de fuerza validos para poder seguir");
    else if (!input.defense || input.defense < 0) return alert("Debe colocar puntos de defensa validos para poder seguir");
    else if (!input.speed || input.speed < 0) return alert("Debe colocar puntos de velocidad validos para poder seguir");
    else if (!input.height || input.height < 0) return alert("Debe colocar una altura valida para poder seguir");
    else if (!input.weight || input.weight < 0) return alert("Debe colocar peso valido para poder seguir");
    else if (!input.img) return alert("Debe colocar una dirección para poder cargar la imagen");
    else if (!input.types.length) return alert("Debe colocar al menos un tipo de Pokemon");
    dispatch(postPokemon(input));
    
    alert("¡El pokemon fue creado con éxito!");

    setInput({
      name: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      img: "",
      types: [],
    });
    history.push("/");
  }


  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div className="">
      <Link to="/">
        <button>VOLVER ATRAS</button>
      </Link>
    <div className=""></div>
      <h1 className="titleForm">Crea tu Pokemon</h1>

      <form className="formulario" on onSubmit={(e) => handleSubmit(e)}>
        <div >
          <label>Nombre: </label>{" "}
          <input
            type="text"
            value={input.name}
            name="name"
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Vida: </label>
          <input
            type="number"
            value={input.hp}
            name="hp"
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Fuerza: </label>
          <input
            type="number"
            value={input.attack}
            name="attack"
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Defensa: </label>
          <input
            type="number"
            value={input.defense}
            name="defense"
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Velocidad: </label>
          <input
            type="number"
            value={input.speed}
            name="speed"
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Altura: </label>
          <input
            type="number"
            value={input.height}
            name="height"
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Peso: </label>
          <input
            type="number"
            value={input.weight}
            name="weight"
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Imagen: </label>
          <input
            type="text"
            value={input.img}
            name="img"
            onChange={handleChange}
          />
        </div>

        <div>
            <label>Tipo</label>
        {/* <select onChange={(e) => handleSelect(e)}>
          {types.map((t) => (
            <option value={t}>{t}</option>
          ))}
        </select> */}
        {/* <select name="tipo"
        value={types}
        onChange={(e) => handleSelect(e)}
        > */}

        {/* </select> */}

        {/* <p className="">
          <p>{input.types.map((el) => el + " ")}</p>
        </p> */}
            <select onChange={(e) => handleSelect(e)}>
            <option value="all">Todos</option>
            <option value="normal">Normal</option>
            <option value="fighting">Fighting</option>
            <option value="flying">Flying</option>
            <option value="poison">Poison</option>
            <option value="ground">Ground</option>
            <option value="rock">Rock</option>
            <option value="bug">Bug</option>
            <option value="ghost">Ghost</option>
            <option value="steel">Steel</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="grass">Grass</option>
            <option value="electric">Electric</option>
            <option value="psychic">Psychic</option>
            <option value="ice">Ice</option>
            <option value="dragon">Dragon</option>
            <option value="dark">Dark</option>
            <option value="fairy">Fairy</option>
            <option value="unknown">Unknown</option>
            <option value="shadow">Shadow</option>
          </select>
        </div>

        <br />

        <button type="submit"> Crear Pokemon </button>
      </form>
    </div>
  );
}